---
layout: post
title: "Quick ESP32 WiFi Connection Guide"
date: 2025-08-09 11:00:00 +0000
categories: [IoT]
tags: [esp32, wifi, tutorial]
author: "Kawsar Mahmud Tanveer Khan"
description: "Simple 5-minute guide to connect ESP32 to WiFi network"
image: "assets/img/blog2.jpg"
---

# Quick ESP32 WiFi Connection

Need to connect your ESP32 to WiFi quickly? Here's a simple code snippet:

```cpp
#include <WiFi.h>

const char* ssid = "Your_WiFi_Name";
const char* password = "Your_Password";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  
  Serial.println("Connected!");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Your main code here
}
```

## That's it!

Your ESP32 is now connected to WiFi. Use `WiFi.localIP()` to get the assigned IP address.

**Next Steps:**
- Set up web server
- Add OTA updates
- Implement MQTT connection

Happy coding! 🚀
