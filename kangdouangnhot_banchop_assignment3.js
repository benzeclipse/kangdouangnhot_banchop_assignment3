// alert("JavaScript works!");
// Banchop Ben Kangdouangnhot
// SDI 1304
// Project 3

// global variables
var cells = true;
var checking = true;
var callTech = "1-800-555-5555";
var check =  0,
    cell3 = 15,
    cell1 = 5,
    cell2 = 5,
    cell4 = 5,
    cell = true,
    mV = 5 + 10.5,
    cellsRead = ["4.7", " 4.8", " 15.5", " 4.9"] 
    newReadings = ["4.5", "3.4", "3.0", "4.5"];

 
// properties objects, return properties
var indicator = { 
				  readout : true, 
                  deadload : 3.0, 
                  OL : "Overload!",
				  scale : "Good,",
				  raw : 12424,
				  loadCells : [1,2,3,4], 
				  
            fix : function ( name ) {
    			  // console.log( "TESTING..." );
    			  
    			  var fixes = ["cell", "readout", "base"];
    			  
    		 var fixing = function (item) {
    			      
    			      fixes.push(item);
    			
    			}      		  
    			  return {
    			   "name" : name,
    			  // "fixing" : fixing,
    			   "fixes" : fixes,
    			   "address" : "5656 W. Thomas ave"
    			  }
			var finish = new fixing(); // mutator
            }
                	
    	
 };
 
    var names = indicator.fix( "Scales R Us, Inc" );
   		 names.address;
   		 console.log(names);    
  		 //indicator.fix();
 
// method procedure, method accessor, argument object
  var getInfo = function () {
    	console.log( indicator.scale, "Dead load at ", indicator.deadload, "Raw counts are " , 
   	    indicator.raw);  
    
if ( indicator.deadload < 5) 
	console.log("Scale Indicator checks okay, status " , indicator.readout);	
else{	
	console.log("Scale Indicator is bad," , indicator.OL);	
    }    
    return indicator
};
  
  
  
 
// Cell output conditions and passing in boolean, number, and string, math
var cellCondition = function ( good, bad, mV , cells, checking ) {
// boolean argument added

if ( cell === true ){
	console.log("You have" + good + ", you have a " + bad  + mV + " milliVolts is " + checking );
}else{
	console.log("Bad");
}
return cell; //return boolean
};

// return math
var getReadings = function(){
    var mv = "All cells check good";
    console.log( mv );
    return mv;
};

// Nested Loop and changing new cell condition and readings
var readRead = function ( nRead ) {	
    var newRead = [ "4.6 mv", "4.7 mv", "4.8 mv", "4.9 mv"],
    cellNum = [1, 2, 3, 4];
    var cel = 1;
    
    while ( cel < 4 ) {
          var c = cel++
          console.log("counting...", c);
    } 
   
	for( i = 0; i < cellsRead.length; i++);
	console.log("\nCells readings are " + cellsRead);
	// local variable
	for ( x = 0; x < i; x++ ) {
		console.log ( "New readings are " + newRead[x] + " for cell " + cellNum[x] );
		
	}	
	console.log("Adjusted readings are " , nRead); // passing in array argument
		return cel;	
};

// json
var system = {
		"cal" : {
		    "1111": {
			"name": "Scale R Us",
			"Location" : "LA, CA"
		},
		     "2222": {
			"name": "Scale America",
			"Location" : "Fresno, CA"
		},
	     "3333": {
			"name": "Scale Technology",
			"Location" : "Stockton, CA"
		}		
	}	
};

for ( var key in system.cal) {
    var Cal = system.cal[key];
    console.log("Our main locations, " , Cal.Location)
};

// calling functions

cellCondition( " 3 good cells", "cell that is reading " , mV , cells, checking );

readRead(newReadings);

getReadings();

getInfo();
