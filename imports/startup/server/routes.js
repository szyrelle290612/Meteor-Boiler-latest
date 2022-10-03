import bodyParser from "body-parser"
import moment from "moment-timezone"
import { check } from "meteor/check"
import multer from "multer"

Picker.middleware(multer().any())
Picker.middleware(bodyParser.json())
Picker.middleware(bodyParser.urlencoded({ extended: false }))

Meteor.startup(() => {
	Picker.route("/test", function (params, request, response, next) {
		request

		switch (request.method) {
			case "POST":
			case "GET":
			case "DELETE":
			case "PUT":
			default:
				response.statusCode = 404
				response.end("HI")
				break
		}
	})
})
