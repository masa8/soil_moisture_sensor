/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        $(document).ready(function(){
        $.PeriodicalUpdater('http://localhost:8783',{method: 'get',
                            minTimeout: 1000,
                            type: 'json',       // xml、json、scriptもしくはhtml (jquery.getやjquery.postのdataType)
                            multiplier:1,       // リクエスト間隔の変更
                            maxCalls: 0         //　リクエスト回数（0：制限なし）
                            },
                            function( data ) {
        /*
         # the sensor value description
         # 0  ~300     dry soil
         # 300~700     humid soil
         # 700~950     in water
         */
                  if ( data[0]["data"] <= 300) {
                  deviceready.innerHTML = "砂漠? :" + data[0]["data"];
                  deviceready.setAttribute('style', 'background-color:#FF0000');
                  }else if ( data[0]["data"] <= 700) {
                  deviceready.innerHTML = "いいね :" + data[0]["data"];
                  
                  }else {
                  deviceready.innerHTML = "水中? :"+ data[0]["data"];
                  deviceready.setAttribute('style', 'background-color:#0000FF');
                  
                  }
                  
        });
        })
    }
};

app.initialize();