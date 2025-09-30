// const questions = [
//   {
//     question: "AWS Redshift is based on which type of database architecture?",
//     options: ["NOSQL", "Columnar store", "Graph database", "Document store"],
//     answer: "Columnar store",
//     explanation: {
//       NOSQL: "NoSQL databases are schema-less and used for flexible, unstructured data, but Redshift is structured.",
//       "Columnar store": "✅ Correct! Redshift stores data in a columnar format, optimized for analytics and queries.",
//       "Graph database": "This is the domain of Amazon Neptune, not Redshift.",
//       "Document store": "Document stores like DocumentDB are different from Redshift’s columnar architecture."
//     }
//   },
//   {
//     question: "Which AWS service is suitable for building and managing real-time streaming data applications?",
//     options: ["Data Pipeline", "Glue", "Kinesis", "MSK"],
//     answer: "Kinesis",
//     explanation: {
//       "Data Pipeline": "Used for scheduled ETL workflows, not real-time streaming.",
//       "Glue": "Serverless ETL, not real-time streaming.",
//       "Kinesis": "✅ Correct! Kinesis handles real-time streaming data at scale.",
//       "MSK": "Managed Kafka is an alternative but more complex compared to Kinesis for real-time streaming."
//     }
//   },
//   {
//     question: "What AWS service is commonly used for serverless compute functions, allowing you to run code without provisioning or managing servers?",
//     options: ["EMR", "EC2", "Kinesis", "Lambda"],
//     answer: "Lambda",
//     explanation: {
//       "EMR": "For big data processing, not serverless compute.",
//       "EC2": "Requires provisioning servers manually.",
//       "Kinesis": "Handles real-time streaming, not code execution.",
//       "Lambda": "✅ Correct! Lambda runs code serverlessly without infrastructure management."
//     }
//   },
//   {
//     question: "Which AWS service is a fully managed graph database service?",
//     options: ["Neptune", "DynamoDB", "DocumentDB", "Redshift"],
//     answer: "Neptune",
//     explanation: {
//       "Neptune": "✅ Correct! Neptune is designed for graph-based workloads like social networks and knowledge graphs.",
//       "DynamoDB": "This is a NoSQL key-value store.",
//       "DocumentDB": "For JSON document storage, not graphs.",
//       "Redshift": "Columnar data warehouse, not graph-based."
//     }
//   },
//   {
//     question: "Where does SageMaker's automatic scaling get the data it needs to determine how many endpoints you need?",
//     options: ["CloudWatch", "CloudTrail", "EC2", "CodeWhisperer"],
//     answer: "CloudWatch",
//     explanation: {
//       "CloudWatch": "✅ Correct! Scaling decisions are based on CloudWatch metrics like CPU/memory usage.",
//       "CloudTrail": "Used for logging API activity, not scaling.",
//       "EC2": "Provides compute but does not dictate scaling rules.",
//       "CodeWhisperer": "AI coding assistant, unrelated to scaling."
//     }
//   },
//   {
//     question: "Which AWS service is used for time series forecasting?",
//     options: ["Amazon Forecast", "Amazon Personalize", "Amazon Rekognition", "AWS Inferentia"],
//     answer: "Amazon Forecast",
//     explanation: {
//       "Amazon Forecast": "✅ Correct! Built specifically for time series forecasting using ML.",
//       "Amazon Personalize": "Used for recommendation engines.",
//       "Amazon Rekognition": "For image and video analysis.",
//       "AWS Inferentia": "A hardware accelerator, not a forecasting service."
//     }
//   },
//   {
//     question: "What is the purpose of AWS Glue in the analytics ecosystem?",
//     options: ["Real-time data streaming", "Data warehousing", "In-memory caching", "ETL processing"],
//     answer: "ETL processing",
//     explanation: {
//       "Real-time data streaming": "Handled by Kinesis or MSK, not Glue.",
//       "Data warehousing": "That’s Amazon Redshift’s role.",
//       "In-memory caching": "Amazon ElastiCache is for caching.",
//       "ETL processing": "✅ Correct! Glue is a managed ETL (Extract, Transform, Load) service."
//     }
//   },
//   {
//     question: "Which AWS service is used for analyzing images to detect objects, scenes, and faces?",
//     options: ["Amazon SageMaker", "Amazon Rekognition", "AWS DeepLens", "Amazon Personalize"],
//     answer: "Amazon Rekognition",
//     explanation: {
//       "Amazon SageMaker": "General ML platform, not prebuilt vision.",
//       "Amazon Rekognition": "✅ Correct! Provides pre-trained image and video analysis APIs.",
//       "AWS DeepLens": "A deep learning-enabled camera for running ML locally.",
//       "Amazon Personalize": "Recommendation engine, not for images."
//     }
//   },
//   {
//     question: "Which AWS service is a fully managed, scalable data warehouse service that allows you to run complex queries on large datasets?",
//     options: ["Redshift", "DynamoDB", "Athena", "RDS"],
//     answer: "Redshift",
//     explanation: {
//       "Redshift": "✅ Correct! Redshift is AWS’s scalable data warehouse service.",
//       "DynamoDB": "NoSQL database, not a data warehouse.",
//       "Athena": "Query service for S3, not a full data warehouse.",
//       "RDS": "Managed relational database, not a warehouse."
//     }
//   },
//   {
//     question: "AWS Step Functions are used for:",
//     options: ["Serverless compute functions", "Real-time data streaming", "Data migration", "Orchestration of serverless workflows"],
//     answer: "Orchestration of serverless workflows",
//     explanation: {
//       "Serverless compute functions": "That’s AWS Lambda.",
//       "Real-time data streaming": "Handled by Kinesis/MSK.",
//       "Data migration": "DataSync or DMS are better fits.",
//       "Orchestration of serverless workflows": "✅ Correct! Step Functions coordinate services into workflows."
//     }
//   },
//   {
//     question: "What is the primary use case for AWS DataSync?",
//     options: ["Database migration", "Data warehousing", "Data transfer between on-premises and AWS", "Real-time data streaming"],
//     answer: "Data transfer between on-premises and AWS",
//     explanation: {
//       "Database migration": "DMS handles database migrations.",
//       "Data warehousing": "That’s Redshift’s role.",
//       "Data transfer between on-premises and AWS": "✅ Correct! DataSync moves data securely and efficiently.",
//       "Real-time data streaming": "Handled by Kinesis/MSK."
//     }
//   },
//   {
//     question: "What AWS service provides conversational interfaces for building chatbots?",
//     options: ["Amazon Polly", "Amazon Lex", "Amazon Comprehend", "AWS Inferentia"],
//     answer: "Amazon Lex",
//     explanation: {
//       "Amazon Polly": "Converts text to speech, not chatbots.",
//       "Amazon Lex": "✅ Correct! Lex powers conversational chatbots.",
//       "Amazon Comprehend": "For NLP and sentiment analysis.",
//       "AWS Inferentia": "Hardware for ML inference."
//     }
//   },
//   {
//     question: "AWS OpenSearch is commonly used for:",
//     options: ["In-memory caching", "Search and analytics on log data", "Real-time data streaming", "Orchestration of serverless workflows"],
//     answer: "Search and analytics on log data",
//     explanation: {
//       "In-memory caching": "That’s ElastiCache.",
//       "Search and analytics on log data": "✅ Correct! OpenSearch is ideal for log analytics and full-text search.",
//       "Real-time data streaming": "Handled by Kinesis/MSK.",
//       "Orchestration of serverless workflows": "Step Functions does this."
//     }
//   },
//   {
//     question: "You are developing an autonomous vehicle that must classify images of street signs with extremely low latency, processing thousands of images per second. What AWS-based architecture would best meet this need?",
//     options: [
//       "Develop with TensorFlow, compile with SageMaker Neo, and run on Jetson with IoT Greengrass",
//       "Use Amazon Rekognition in edge mode",
//       "Use Rekognition on AWS DeepLens",
//       "Develop with SageMaker Object Detection + Elastic Inference"
//     ],
//     answer: "Develop with TensorFlow, compile with SageMaker Neo, and run on Jetson with IoT Greengrass",
//     explanation: {
//       "Develop with TensorFlow, compile with SageMaker Neo, and run on Jetson with IoT Greengrass": "✅ Correct! This provides optimized, low-latency inference directly on the edge device.",
//       "Use Amazon Rekognition in edge mode": "Rekognition isn’t designed for real-time embedded inference at this scale.",
//       "Use Rekognition on AWS DeepLens": "DeepLens is for prototyping, not industrial-scale inference.",
//       "Develop with SageMaker Object Detection + Elastic Inference": "Elastic Inference still requires cloud calls, adding latency."
//     }
//   },
//   {
//     question: "Which AWS service is used for language translation?",
//     options: ["Amazon Translate", "Amazon Polly", "Amazon Comprehend", "Amazon Lex"],
//     answer: "Amazon Translate",
//     explanation: {
//       "Amazon Translate": "✅ Correct! Provides neural machine translation for multiple languages.",
//       "Amazon Polly": "Text-to-speech, not translation.",
//       "Amazon Comprehend": "For NLP and entity recognition.",
//       "Amazon Lex": "For chatbots, not translation."
//     }
//   },
//   {
//     question: "What AWS service is designed for scalable, secure, and durable storage, suitable for data lakes and analytics workloads?",
//     options: ["S3", "EBS", "Redshift", "Glue"],
//     answer: "S3",
//     explanation: {
//       "S3": "✅ Correct! S3 is scalable object storage, perfect for data lakes.",
//       "EBS": "Block storage attached to EC2 instances.",
//       "Redshift": "Data warehouse, not raw storage.",
//       "Glue": "ETL service, not storage."
//     }
//   },
//   {
//     question: "In the context of AWS analytics, what does EFS stand for?",
//     options: ["Elastic File Storage", "Elastic File Sync", "Elastic File Server", "Elastic File System"],
//     answer: "Elastic File System",
//     explanation: {
//       "Elastic File Storage": "Not the official name.",
//       "Elastic File Sync": "Incorrect expansion.",
//       "Elastic File Server": "Not accurate.",
//       "Elastic File System": "✅ Correct! EFS is a managed NFS file system."
//     }
//   },
//   {
//     question: "Which AWS service is designed to provide personalized recommendations for users based on their historical interactions and preferences?",
//     options: ["Amazon Redshift", "Amazon S3", "Amazon Personalize", "Amazon SageMaker"],
//     answer: "Amazon Personalize",
//     explanation: {
//       "Amazon Redshift": "Data warehouse, not recommender system.",
//       "Amazon S3": "Object storage.",
//       "Amazon Personalize": "✅ Correct! Tailored for personalized recommendations.",
//       "Amazon SageMaker": "General ML platform, not a dedicated recommender system."
//     }
//   },
//   {
//     question: "Which AWS service provides personalized recommendation systems?",
//     options: ["Amazon Redshift", "Amazon Athena", "Amazon Personalize", "Amazon SageMaker"],
//     answer: "Amazon Personalize",
//     explanation: {
//       "Amazon Redshift": "Analytics data warehouse.",
//       "Amazon Athena": "Querying S3 with SQL.",
//       "Amazon Personalize": "✅ Correct! Pre-built recommendation service.",
//       "Amazon SageMaker": "Custom ML workflows, not prebuilt recommendations."
//     }
//   },
//   {
//     question: "What AWS service allows you to create, schedule, and orchestrate data-driven workflows, also integrating with on-premises data sources?",
//     options: ["AWS Data Pipeline", "CodePipeline", "AWS Step Functions", "Glue"],
//     answer: "AWS Data Pipeline",
//     explanation: {
//       "AWS Data Pipeline": "✅ Correct! Specifically built for scheduled workflows across AWS and on-prem.",
//       "CodePipeline": "Used for CI/CD, not analytics data pipelines.",
//       "AWS Step Functions": "Orchestration for serverless applications, not data pipelines.",
//       "Glue": "ETL but not workflow orchestration across services."
//     }
//   },
//   {
//     question: "Which AWS service offers pre-configured environments for building and training machine learning models?",
//     options: ["Amazon Forecast", "Amazon SageMaker", "AWS Inferentia", "Amazon Rekognition"],
//     answer: "Amazon SageMaker",
//     explanation: {
//       "Amazon Forecast": "Time series forecasting, not general ML training.",
//       "Amazon SageMaker": "✅ Correct! Provides pre-configured Jupyter notebooks and training environments.",
//       "AWS Inferentia": "Custom ML inference chip, not a development environment.",
//       "Amazon Rekognition": "Pre-built vision APIs, not general-purpose ML."
//     }
//   },
//   {
//     question: "Which AWS service offers containers for deploying deep learning models?",
//     options: ["AWS Deep Learning Containers", "Amazon SageMaker", "Amazon Rekognition", "Amazon Comprehend"],
//     answer: "AWS Deep Learning Containers",
//     explanation: {
//       "AWS Deep Learning Containers": "✅ Correct! Provides prebuilt Docker images for ML frameworks.",
//       "Amazon SageMaker": "Manages training and deployment but doesn’t provide raw containers.",
//       "Amazon Rekognition": "Pre-built vision service, not for custom deployment.",
//       "Amazon Comprehend": "Prebuilt NLP service, not container deployment."
//     }
//   }
// ];

var questions = [
  {
    instr: "You are developing a computer vision system that can classify every pixel in an image based on its image type, such as people, buildings, roadways, signs, and vehicles. Which SageMaker algorithm would provide you with the best starting point for this problem?",
    feedback: "Semantic Segmentation classifies every pixel, making it the best fit.",
    options: ["Object Detection", "Semantic Segmentation", "Rekognition", "Object2Vec"],
    answers: [false, true, false, false]
  },
  {
    instr: "What AWS service provides a fully managed, highly available, and scalable document database for MongoDB workloads?",
    feedback: "Amazon DocumentDB is designed for MongoDB compatibility.",
    options: ["DynamoDB", "Neptune", "DocumentDB", "Redshift"],
    answers: [false, false, true, false]
  },
  {
    instr: "Which AWS service offers computer vision at the edge for analyzing live video streams?",
    feedback: "Amazon Panorama runs CV models at the edge for video streams.",
    options: ["Amazon Rekognition", "AWS DeepLens", "Amazon Panorama", "Amazon SageMaker"],
    answers: [false, false, true, false]
  },
  {
    instr: "What AWS service is suitable for performing NLP tasks such as sentiment analysis and entity recognition?",
    feedback: "Amazon Comprehend is the NLP service for sentiment and entities.",
    options: ["Amazon Textract", "Amazon Translate", "Amazon Comprehend", "Amazon Polly"],
    answers: [false, false, true, false]
  },
  {
    instr: "In the context of AWS analytics, what does MSK stand for?",
    feedback: "MSK means Managed Streaming for Kafka.",
    options: ["Memory Streaming for Kinesis", "Managed Streaming for Kafka", "Memory Streaming for Kafka", "Managed Service for Kinesis"],
    answers: [false, true, false, false]
  },
  {
    instr: "Which AWS service is used for OCR (Optical Character Recognition) to extract text from scanned documents?",
    feedback: "Amazon Textract is the OCR service.",
    options: ["Amazon Comprehend", "Amazon Textract", "Amazon Translate", "Amazon Rekognition"],
    answers: [false, true, false, false]
  },
  {
    instr: "AWS service provides pre-configured deep learning environments for training and deploying custom models?",
    feedback: "AWS Deep Learning AMIs provide pre-configured DL environments.",
    options: ["AWS Deep Learning AMIs", "Amazon SageMaker", "AWS DeepLens", "Amazon Rekognition"],
    answers: [true, false, false, false]
  },
  {
    instr: "AWS Athena allows you to query data directly from which AWS service?",
    feedback: "Athena queries data directly from Amazon S3.",
    options: ["S3", "Redshift", "DynamoDB", "Glue"],
    answers: [true, false, false, false]
  },
  {
    instr: "AWS Redshift is based on which type of database architecture?",
    feedback: "Redshift is a columnar store optimized for analytics.",
    options: ["NOSQL", "Columnar store", "Graph database", "Document store"],
    answers: [false, true, false, false]
  },
  {
    instr: "Which AWS service is suitable for building and managing real-time streaming data applications?",
    feedback: "Kinesis is designed for real-time streaming analytics.",
    options: ["Data Pipeline", "Glue", "Kinesis", "MSK"],
    answers: [false, false, true, false]
  },
  {
    instr: "What AWS service is commonly used for serverless compute functions?",
    feedback: "AWS Lambda runs code without provisioning servers.",
    options: ["EMR", "EC2", "Kinesis", "Lambda"],
    answers: [false, false, false, true]
  },
  {
    instr: "Which AWS service is a fully managed graph database?",
    feedback: "Amazon Neptune is AWS’s graph database.",
    options: ["Neptune", "DynamoDB", "DocumentDB", "Redshift"],
    answers: [true, false, false, false]
  },
  {
    instr: "Where does SageMaker's automatic scaling get the data it needs?",
    feedback: "It uses CloudWatch metrics to scale endpoints.",
    options: ["CloudWatch", "CloudTrail", "EC2", "CodeWhisperer"],
    answers: [true, false, false, false]
  },
  {
    instr: "Which AWS service is used for time series forecasting?",
    feedback: "Amazon Forecast provides ML-based time series forecasting.",
    options: ["Amazon Forecast", "Amazon Personalize", "Amazon Rekognition", "AWS Inferentia"],
    answers: [true, false, false, false]
  },
  {
    instr: "What is the purpose of AWS Glue?",
    feedback: "AWS Glue is used for ETL (Extract, Transform, Load).",
    options: ["Real-time data streaming", "Data warehousing", "In-memory caching", "ETL processing"],
    answers: [false, false, false, true]
  },
  {
    instr: "Which AWS service is used for analyzing images?",
    feedback: "Amazon Rekognition detects objects, scenes, and faces.",
    options: ["Amazon SageMaker", "Amazon Rekognition", "AWS DeepLens", "Amazon Personalize"],
    answers: [false, true, false, false]
  },
  {
    instr: "Which AWS service is a fully managed, scalable data warehouse?",
    feedback: "Amazon Redshift is the managed data warehouse service.",
    options: ["Redshift", "DynamoDB", "Athena", "RDS"],
    answers: [true, false, false, false]
  },
  {
    instr: "AWS Step Functions are used for:",
    feedback: "They orchestrate serverless workflows.",
    options: ["Serverless compute functions", "Real-time data streaming", "Data migration", "Orchestration of serverless workflows"],
    answers: [false, false, false, true]
  },
  {
    instr: "What is the primary use case for AWS DataSync?",
    feedback: "DataSync transfers data between on-premises and AWS.",
    options: ["Database migration", "Data warehousing", "Data transfer between on-premises and AWS", "Real-time data streaming"],
    answers: [false, false, true, false]
  },
  {
    instr: "What AWS service provides conversational interfaces for building chatbots?",
    feedback: "Amazon Lex is used to build chatbots.",
    options: ["Amazon Polly", "Amazon Lex", "Amazon Comprehend", "AWS Inferentia"],
    answers: [false, true, false, false]
  },
  {
    instr: "AWS OpenSearch is commonly used for:",
    feedback: "OpenSearch is used for search and log analytics.",
    options: ["In-memory caching", "Search and analytics on log data", "Real-time data streaming", "Orchestration of serverless workflows"],
    answers: [false, true, false, false]
  },
  {
    instr: "You are developing an autonomous vehicle that must classify images of street signs with low latency. What AWS-based architecture would best meet this need?",
    feedback: "SageMaker Neo + Greengrass enables optimized inference at the edge.",
    options: [
      "Use TensorFlow with SageMaker Neo and IoT Greengrass on Jetson edge device",
      "Use Amazon Rekognition in edge mode",
      "Use Rekognition on AWS DeepLens",
      "Use SageMaker Object Detection with Elastic Inference from the cloud"
    ],
    answers: [true, false, false, false]
  },
  {
    instr: "Which AWS service is used for language translation?",
    feedback: "Amazon Translate is the translation service.",
    options: ["Amazon Translate", "Amazon Polly", "Amazon Comprehend", "Amazon Lex"],
    answers: [true, false, false, false]
  },
  {
    instr: "Which AWS service is designed for scalable, durable storage for data lakes?",
    feedback: "Amazon S3 is the storage backbone for data lakes.",
    options: ["S3", "EBS", "Redshift", "Glue"],
    answers: [true, false, false, false]
  },
  {
    instr: "In the context of AWS analytics, what does EFS stand for?",
    feedback: "EFS means Elastic File System.",
    options: ["Elastic File Storage", "Elastic File Sync", "Elastic File Server", "Elastic File System"],
    answers: [false, false, false, true]
  },
  {
    instr: "Which AWS service provides personalized recommendations for users?",
    feedback: "Amazon Personalize generates personalized recommendations.",
    options: ["Amazon Redshift", "Amazon S3", "Amazon Personalize", "Amazon SageMaker"],
    answers: [false, false, true, false]
  },
  {
    instr: "Which AWS service provides personalized recommendation systems?",
    feedback: "Amazon Personalize is the recommendation engine service.",
    options: ["Amazon Redshift", "Amazon Athena", "Amazon Personalize", "Amazon SageMaker"],
    answers: [false, false, true, false]
  },
  {
    instr: "Which AWS service allows you to create, schedule, and orchestrate data-driven workflows?",
    feedback: "AWS Data Pipeline is for orchestrating workflows and integrates with on-prem data.",
    options: ["AWS Data Pipeline", "CodePipeline", "AWS Step Functions", "Glue"],
    answers: [true, false, false, false]
  },
  {
    instr: "Which AWS service offers pre-configured environments for building and training ML models?",
    feedback: "Amazon SageMaker provides pre-configured ML environments.",
    options: ["Amazon Forecast", "Amazon SageMaker", "AWS Inferentia", "Amazon Rekognition"],
    answers: [false, true, false, false]
  },
  {
    instr: "Which AWS service offers containers for deploying deep learning models?",
    feedback: "AWS Deep Learning Containers provide pre-built Docker images.",
    options: ["AWS Deep Learning Containers", "Amazon SageMaker", "Amazon Rekognition", "Amazon Comprehend"],
    answers: [true, false, false, false]
  }
];


var feedback= '';
var countQ=0;
var countTrue=0;

createQuestion();
$('#feedback').hide();
$('#lastScreen').hide();
$('#answersScreen').hide();

$('.submit').click(function(){
	var nbRightAnswers = countRightAnwers();
	if($('.clicked').length ===0){
		//no option selected, display an error message 
		alert('Please select at least one option');
		$('.clicked').toggleClass('clicked');
		$('.option').css('cursor','pointer');
		$('.option').css('pointer-events','auto');
		
	}else{
		//at least an option has been selected
		//the user can't click on the options
		$('.option').css('pointer-events','none');
		if(nbRightAnswers<=1){
			//single answer
			console.log('single answer')
			if($('.clicked').length !==1){
				//too many options selected, display an error message
				alert('Please select ONLY one option');
				$('.clicked').toggleClass('clicked');
				$('.option').css('cursor','pointer');
				$('.option').css('pointer-events','auto');
			}else{
				checkAnswer(nbRightAnswers);
				displayFeedback(feedback);
			}
		}else{
			//multiple answer
			console.log('multiple answer');
			checkAnswer(nbRightAnswers);
			displayFeedback(feedback);
		}
	}
});

$('.retake').click(function(){
	feedback= '';
	countQ=0;
	countTrue=0;
	$('#lastScreen').hide();
	$('#answersScreen').hide();
	$('#feedback').hide();
	$('#quiz').show();
	createQuestion();
});

$('.answers').click(function(){
	$('#lastScreen').hide();
	$('#answersScreen').show();
	console.log(questions.length);
	for(var i=0; i<questions.length; i++){
		var questionNb = i+1;
		var title = 'Question ' + questionNb;
		var answerText = questions[i].feedback;
		var questionReminder = questions[i].instr;
		
		var answerItem = '<h2>'+title+'</h2><p>'+questionReminder+'</p><p>'+answerText+'</p>';
		$('#answers').append(answerItem);
	}
	 
});

$('.arrowNextQ').click(function(){
	createQuestion();
	$('#feedback').hide();
	$('.clicked').toggleClass('clicked');
});


function countRightAnwers(){
	//Check the number of right anwers for the question
	var $option = $('.option');
	var count = $option.length;
	var answer = 0;
	for(var i=0; i<count; i++){
		if($option[i].dataset.result === 'true'){
			answer ++;
		}
	}
	return answer;
}

function checkAnswer(nbRightA){
	//Check if the user has selected the right answers
	var answersSelected = $('.clicked').length;
	if (answersSelected !== nbRightA){
		//The user hasn't selected the right number of right answers (in case of multiple answers)
		feedback = 'wrong';
		return feedback;
	}else{
		for(var i=0; i<answersSelected; i++){
			//Check if in the selected answers all have the data-result equal to true, which means this is a right answer
			if($('.clicked')[i].dataset.result==='false'){
				//The user has selected a wrong answer, then the whole answer will be wrong
				feedback = 'wrong';
				return feedback;
			}
		}
		feedback = 'true';
		countTrue++;
		
	}
}

function displayFeedback(feedback){
	$('.submit').hide();
	$('#feedback').show();
	$('#answer').html(feedback);
	var nbOption = $('.option').length;
	//display the feedback window at the right place
	if(nbOption<=2){
		 $('#feedback').css('top','50%');
	}else if(nbOption>=3 && nbOption<4){
		 $('#feedback').css('top','55%');
	}else{
		$('#feedback').css('top','62%');	 
	}
}

function createQuestion(){
	$('.clicked').toggleClass('clicked');
	$('.submit').show();
	//Create the question with the options stated in the array questions on top
	if(countQ===questions.length){
		//if there are no more questions, display the last screen with the score
		$('#quiz').hide();
		$('#lastScreen').show();
		var scorePercentage = Math.floor((countTrue/countQ)*100);
		$('#score').html(scorePercentage);
	}
	$('.option').css('cursor','pointer');
	$('.option').css('pointer-events','auto');
	$('.options').empty();
	var Qnb = countQ+1;
	var title = 'Question ' + Qnb;
	var instr = questions[countQ].instr;
	var feedbackText = questions[countQ].feedback;
  
	$('.question h1').html(title);
	$('.question p').html(instr);
	$('.feedbackTxt').html(feedbackText);
	
	//Create the list of options and append to the container named options
	for(var i=0; i<questions[countQ].options.length; i++){
		var option = "<div class='option btn' data-result='"+questions[countQ].answers[i]+"'>"+questions[countQ].options[i]+"</div>";
		$('.options').append(option);
	}
		$('.option').click(function(){
		$(this).toggleClass('clicked');
	});
	countQ++;
}