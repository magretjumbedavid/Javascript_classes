//1. You are building a feature rollout system for a startup where a FeatureToggle constructor 
// function has properties: featureName (string), isEnabled (boolean), and 
// userGroupAccess (array of strings like "betaTesters", "admins"), and you must use a p
// rototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable or 
// disable the feature, and simulate access attempts using if-else and switch statements for different roles.

function FeatureeatureToggle(featureName,isEnabled,userGroupAccess){
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;

}
canAccess.prototype.featureToggle = function(){
    return `These people ${this.userGroupAccess} can access`;
}
toggleFeature.prototype.featureToggle = function(){
    if(attempts > 2 && attempts <=4){
        return Enable
      }
     switch(FeatureToggle.toLowerCase()){
        case "enable":
        return `feature is ${this.isEnabled}`;
        break;
        case "disenable":
            return `feature is not ${this.Enable}`;
            break;
            default:
      return "feature is no longer work";
            }
}
      
      const payment=new Payment('Payment,true',["betaTesters","admins"]);
      console.log({payment});
      console.log(payment.isEnabled);
      console.log(payment.toggleFeature());
      console.log(payment.canAccess());



//      

//       In a freelancer time-tracking platform, create a TimeLog constructor function with properties:
//        freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked),
//        then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 
//       40 using if-else logic.

      function TimeLog(freelancer,projectDetails){
        this.freelancer = freelancer;
        this.projectDetails = projectDetails;
        
      }

      const danjo = new TimeLog('Danjo','good');
      console.log({danjo});
      TimeLog.prototype.earnings="100000,200000,400000"
      console.log(danjo.earnings);
      TimeLog.prototype.hourlyRate="20,4,30,88,30"
      console.log(danjo.hourlyRate);
      TimeLog.prototype.totalEarnings=20+4+30+38+30/5
      console.log(danjo.totalEarnings);


      // 3. You are developing a startup’s order management system where an Order constructor function should contain customer 
      // (object with name and email), items (array of objects with productName, quantity, and unitPrice), 
      // and status (string), then implement prototype methods to compute total cost, update order status based on payment, 
      // and categorize order urgency using switch and conditional statements.

      function Order(customer,items,cost,status){
        this.customer=customer;
        this.items=items;
        this.status=status;
        this.cost=cost;
      }
    const maggie = new Order('Maggie','soap',5000,'high');
    console.log(maggie);

    // 4.In a startup’s employee review tool, design an Employee class with properties: 
    // id (number), name (string), performanceMetrics (object with keys like communication, 
    // efficiency, and reliability), and feedback (array of strings), then use prototypes to calculate an 
    // average score, classify performance level using control flow, and add new 
    // feedback based on conditions.
    function Employee(name,id,performanceMetrics,feedback){
      this.name=name;
      this.id=id;
      this.performanceMetrics=performanceMetrics;
      this.feedback=feedback;

    }
    const chrie=new Employee('Chrie',7,'high peformance','keep it up');
    console.log(chrie);
    Employee.prototype.averageScore=90+80+60+45+70/5
    console.log(chrie.averageScore);
    Employee.prototype.newFeedback="Excellent work";
    console.log(chrie.newFeedback);

    // 5.Build a simple e-learning system where a Course class has properties: title (string), instructor 
    // (object with name and expertise), and students (array of objects with name and completionStatus), 
    // then add prototype methods to return names of students who completed the course, count enrolled 
    // students by expertise area, and use control flow to output different messages for instructors with 
    // more or less than 5 students.
    function E_learning(title,instructor,student){

    }






