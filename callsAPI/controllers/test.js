const surveyData = require('../models/survey')
import { useState, useEffect } from "react";

function test() {
	useEffect(() => {
		fetch(`http://localhost:8000/survey`)
			 .then((response) => response.json()
			 .then(({ surveyData }) => console.log(surveyData))
			 .catch((error) => console.log(error))
		 )
	 }, [])
	
	 //return surveyData[questionNumber]
	return surveyData
}

module.exports = test
