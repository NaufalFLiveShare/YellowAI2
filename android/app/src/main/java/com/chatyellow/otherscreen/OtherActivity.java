package com.chatyellow.otherscreen;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;

public class OtherActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Set the background color of the activity to black
        LinearLayout layout = new LinearLayout(this);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setGravity(Gravity.CENTER);
        layout.setBackgroundColor(Color.BLACK);
        setContentView(layout);

        // Create and add the text view
        TextView label = new TextView(this);
        label.setText("this is other native screen");
        label.setTextAlignment(View.TEXT_ALIGNMENT_CENTER);
        label.setTextSize(24);
        label.setTextColor(Color.WHITE);
        layout.addView(label);
    }

}