/*
Statistical inference and hypothesis testing

Inputs:
- C_sampling (boolean): Determines if questions related to sampling methods and techniques should be included.
- C_confidence_intervals (boolean): Determines if questions related to constructing confidence intervals should be included.
- C_hypothesis_testing (boolean): Determines if questions related to hypothesis testing should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to statistical inference and hypothesis testing. It covers topics such as various sampling methods, constructing confidence intervals, and conducting hypothesis tests for different types of statistical analyses. The questions may involve calculating p-values, conducting t-tests, and interpreting confidence intervals.

Example Usage:
const result = StatisticalInferenceAndHypothesisTesting(true, true, false);
console.log(result); // Output: ['Construct a 95% confidence interval for the mean weight of the population given the sample mean... ', 'The 95% confidence interval for the population mean weight is ... ']
*/

$X.math.University_Mathematics.Probability_and_Statistics.StatisticalInferenceAndHypothesisTesting = function (C_sampling, C_confidence_intervals, C_hypothesis_testing) {
    // Your code goes here
    if(C_sampling){
        var question;
		var answer;
		const methods = ["simple random sample", "systematic sampling", "stratified sampling", "cluster sampling", "convenience sample", "voluntary response sample", "judgement sampling", "snowball sampling"];
		const randMeth = Math.floor(Math.random()* methods.length);
		if(randMeth == 0){
			question = "Which type of sampling method ensures that every member of the population has an equal chance of being selected?";
			answer = methods[randMeth];
		}else if(randMeth == 1){
			question = "Which sampling method choses an individual at regular intervals?";
			answer = methods[randMeth];
		}else if(randMeth == 2){
			question = "Which sampling method divides the population into subpopulations(strata) that may differ in important ways and takes random sample in each group?";
			answer = methods[randMeth];
		}else if(randMeth == 3){
			question = "Which sampling method divides the population into subgroups where each subgroup have similar characteristics to the whole sample and takes random sample in each group?";
			answer = methods[randMeth];
		}else if(randMeth == 4){
			question = "Which bias sampling method takes individuals who happen to be most accessible to the researcher?";
			answer = methods[randMeth];
		}else if(randMeth == 5){
			question = "Which bias sampling method uses response from people that volunteer to respond?";
			answer = methods[randMeth];
		}else if(randMeth == 6){
			question = "Which bias sampling method involves the researcher using their expertise to select a sample that is most useful to the purposes of the research?";
			answer = methods[randMeth];
		}else if(randMeth == 7){
			question = "Which bias sampling method uses recruit participants to via other participants?";
			answer = methods[randMeth];
		}
        // Return the question and answer in an array
        return [question, answer];
    }else if(C_confidence_intervals){
    	function calcStandardError(prop){
		const standError = Math.sqrt((prop*(1-prop))/100);
		return standError;
	}
	var question;
	var answer;
	const probability = Math.random();
	if(0.1585 < probability  &&  probability < 0.8385){
		question = "Suppose a candidate has " + `${probability.toFixed(2)}` + " chance of winning a election, what is the confidence intervals? And with what confidence?";
		answer = "With 68% confidence between " + `${(probability-calcStandardError(probability)).toFixed(2)}` + " and " + `${(probability+calcStandardError(probability)).toFixed(2)}` + " of voters will support this candidate."; 
	}else if(.0235 < probability && probability < .9735){
		question = "Suppose a candidate has " + `${probability.toFixed(2)}` + " chance of winning a election, what is the confidence intervals? And with what confidence?";
		answer = "With 95% confidence between " + `${(probability-calcStandardError(probability)).toFixed(2)}` + " and " + `${(probability+calcStandardError(probability)).toFixed(2)}` + " of voters will support this candidate."; 
	}else if(0 < probability  && probability < 1){
		question = "Suppose a candidate has " + `${probability.toFixed(2)}` + " chance of winning a election, what is the confidence intervals? And with what confidence?";
		answer = "With 99.7% confidence between " + `${(probability-calcStandardError(probability)).toFixed(2)}` + " and " + `${(probability+calcStandardError(probability)).toFixed(2)}` + " of voters will support this candidate."; 
	}
        // Return the question and answer in an array
        return [question, answer];
    }else if(C_hypothesis_testing){
	function calculateZScore(pMean, sMean, samS, stD){
		const z_score = (sMean - pMean)/(stD/Math.sqrt(samS));
		return z_score;
	}
	    
        const type = ["height", "hair length", "weight", "lifespan", "salary per hour", "sleep time"];
	const randType = Math.floor(Math.random()*type.length);
	const samMean = Math.ceil(Math.random()*9);
	const popMean = Math.ceil(Math.random()*9);
	const sampleSize = Math.ceil(Math.random()*9) + 500;
	const stD = Math.ceil(Math.random()*9);
	const question = "Let's consider a hypothesis test for the average " + type[randType] + " of people in country X. Suppose our null hypothesis is that the average " + type[randType] + " is " + popMean + ". We gather a sample of " + sampleSize + " people and determine that their average " + type[randType] + " is " + samMean + ". The standard deviation of population is " + stD + ".";
	var answer;
	const z_score = calculateZScore(popMean, samMean, sampleSize, stD);
	if(z_score > 1.96 || z_score < -1.96){
		answer = "We will reject the null hypothesis as the z-score of " + `${z_score.toFixed(2)}` + " is very large and conclude that there is evidence to suggest that the average " + type[randType] + " of people in country X is greater than " + popMean;
	}else{
		answer = "We will accept the null hypothesis as the z-score of " + `${z_score.toFixed(2)}` + " is not large and conclude that there isn't evidence to suggest that the average " + type[randType] + " of people in country X is greater than " + popMean;
	}
        return [question, answer];
    }
}
