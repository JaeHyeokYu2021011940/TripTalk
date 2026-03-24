package com.myapp
 
import android.app.Activity
import android.content.Intent
import android.net.Uri
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.BaseActivityEventListener
 
class IntentModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
 
    private var filePickerCallback: Callback? = null
    private val FILE_PICKER_REQUEST = 1001
 
    private val activityEventListener = object : BaseActivityEventListener() {
        override fun onActivityResult(activity: Activity, requestCode: Int, resultCode: Int, data: Intent?) {
            if (requestCode == FILE_PICKER_REQUEST) {
                if (resultCode == Activity.RESULT_OK && data != null) {
                    val uri = data.data
                    if (uri != null) {
                        try {
                            val inputStream = reactContext.contentResolver.openInputStream(uri)
                            val text = inputStream?.bufferedReader(Charsets.UTF_8)?.readText()
                            inputStream?.close()
                            filePickerCallback?.invoke(text)
                        } catch (e: Exception) {
                            filePickerCallback?.invoke(null)
                        }
                    } else {
                        filePickerCallback?.invoke(null)
                    }
                } else {
                    filePickerCallback?.invoke(null)
                }
                filePickerCallback = null
            }
        }
    }
 
    init {
        reactContext.addActivityEventListener(activityEventListener)
    }
 
    override fun getName(): String = "IntentModule"
 
    // 카카오톡 공유로 넘어온 파일 읽기
    @ReactMethod
    fun getSharedText(callback: Callback) {
        val activity = reactContext.currentActivity ?: return callback(null)
        val intent = activity.intent ?: return callback(null)
 
        if (intent.action != Intent.ACTION_SEND) return callback(null)
 
        // 파일로 넘어온 경우만 처리
        val uri = intent.getParcelableExtra<Uri>(Intent.EXTRA_STREAM)
        if (uri != null) {
            try {
                val inputStream = reactContext.contentResolver.openInputStream(uri)
                val text = inputStream?.bufferedReader(Charsets.UTF_8)?.readText()
                inputStream?.close()
                return callback(text)
            } catch (e: Exception) {
                return callback(null)
            }
        }
 
        callback(null)
    }
 
    // 파일 피커 열기
    @ReactMethod
    fun openFilePicker(callback: Callback) {
        val activity = reactContext.currentActivity ?: return callback(null)
        filePickerCallback = callback
 
        val intent = Intent(Intent.ACTION_GET_CONTENT).apply {
            type = "*/*"
            addCategory(Intent.CATEGORY_OPENABLE)
        }
 
        activity.startActivityForResult(
            Intent.createChooser(intent, "파일 선택"),
            FILE_PICKER_REQUEST
        )
    }
}