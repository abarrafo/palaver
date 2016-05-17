# palaver
prototype for a prototype

Palaver is a boilerplate for simulating a Concierge conversation with an iOS user. Runs on firebase and modern web browsers. 

![democap](https://cloud.githubusercontent.com/assets/8388/15311107/6f0f662a-1bc5-11e6-8077-9d0bdc048ee9.gif)

## Setup

* Get a [Firebase](https://www.firebase.com/) account
 * then log-in and [visit this link](https://www.firebase.com/tutorial/#example/chat) and scroll to find your firebase db ref (looks like `https://[some hash here].firebaseio-demo.com/`)
* Cut and paste your db ref into `admin.js` and `app.js`
* run the app 
 * I recommend node-based `http-server` if you're running locally, install with `npm install -g http-server'
* Access the app via a modern iOS device (Safari), and the admin panel at `/admin.html` on a laptop

## Usage

* For admins: visit admin.html for "admin
* For testers: visit index.html

## Pre-written content 

The life of a fake concierge is tough, so you can add your own pre-written copy to the admin panel. Submit and edit with ease!

![admincap](https://cloud.githubusercontent.com/assets/8388/15311018/6dd57912-1bc4-11e6-8109-e08c7a303d3d.gif)


