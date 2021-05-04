/*
    Filename: simpleTest.js

    Description: JavaScript program that records user and transcribes user speech through dictate.js library.
    The aim of this demo application is to demonstrate how to use dictate.js library in order to record
    user and receive transcription of the speech audio.

    Everything should be in accordance with Apache 2.0 licence. Only simpleTest.js and simpleTest.html were created.
    The library itself was not modified. See LICENCE for more information.

    Author: Jürgen Leppsalu
    Date: 01.05.2021
 */


// Variable, where last transcription is stored.
var transcription = "";
// Boolean, that determines whether app is connected to Estonian speech-to-text server.
var isConnected = false;
// Dictate object. Handles recording the user and communication with transcription service.
var dictate = new Dictate({
		server : "wss://bark.phon.ioc.ee:8443/dev/duplex-speech-api/ws/speech", 		// Transcription server URL
		serverStatus : "wss://bark.phon.ioc.ee:8443/dev/duplex-speech-api/ws/status",	// Transcription server status URL
		recorderWorkerPath : '../lib/recorderWorker.js',
		onReadyForSpeech : function() {		// Server's web workers are ready to accept input and transcribe speech.
			isConnected = true;
			console.log("READY FOR SPEECH")
		},
		onEndOfSpeech : function() {
			console.log("END OF SPEECH")
		},
		onEndOfSession : function() {		// Session between the server and application has been ended.
			isConnected = false;
			console.log("END OF SESSION")
		},
		onServerStatus : function(json) {	// If there are no server-side web workers available and we are currently not connected to the server then disable the Start/Stop button.
			if (json.num_workers_available === 0 && ! isConnected) {
				$("#buttonToggleListening").prop("disabled", true);
			} else {
				$("#buttonToggleListening").prop("disabled", false);
			}
		},
		// Server transcribes speech in real-time. These transcriptions are returned to this callback.
		// Beware that these transcriptions are not final and may change when the rest of user's input is processed.
		onPartialResults : function(hypos) {
			console.log("Partial result: " + hypos[0]["transcript"]);
		},
		// Final transcription of user's speech is returned to this callback.
		// The returned value "hypos" may also contain other transcriptions that the system deems plausible.
		// For the sake of simplicity the first transcription is chosen but for more sophisticated systems
		// you may want to check other transcriptions and compare the parameter named "likelihood" for each transcript.
		onResults : function(hypos) {
			transcription=hypos[0]["transcript"];
			console.log("Result: " + transcription)
		},
		onError : function(code, data) {
			dictate.cancel();
		},
		onEvent : function(code, data) {
		}
	});


function toggleListening() {
	if (isConnected) {
		dictate.stopListening();
		console.log("STOPPED LISTENING.")
	} else {
		dictate.startListening();
		console.log("LISTENING...")
	}
}
function cancel() {
	dictate.cancel();
}

$(document).ready(function() {
	dictate.init();
});