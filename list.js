  // Initially Hide All Details
  hideAllDetails();

  // Define Hide All Details
  function hideAllDetails() {
  const allDetails = document.getElementsByClassName("details");
  for (let i = 0; i < allDetails.length; i++) {
    hideItems(allDetails[i])
  }
  } 

  // Show Details on Hover
  document.getElementById("lawyer_01").
    addEventListener("click",displayLawyer_01_details);

  document.getElementById("lawyer_02").
    addEventListener("click",displayLawyer_02_details);

  document.getElementById("social_01").
    addEventListener("click",displaySocial_01_details);

  // Show Details
  function displayLawyer_01_details() {
    hideAllDetails();
    document.getElementById("lawyer_01_details").style.display = "inline";
  }

  function displayLawyer_02_details() {
    hideAllDetails();
    document.getElementById("lawyer_02_details").style.display = "inline";
  }

  function displaySocial_01_details() {
    hideAllDetails();
    document.getElementById("social_01_details").style.display = "inline";
  }

  // Add Event Listen to Button  
  document.getElementById("lawyersOnly").addEventListener("click",funcLawyersOnly);
  document.getElementById("socialOnly").addEventListener("click",funcSocialOnly);  
  document.getElementById("allAssignments").addEventListener("click",funcShowAll);
    
  // Lawyers Only
  function funcLawyersOnly() {
  hideAll();
  showLawyer();    
  }  

  // Social Only
  function funcSocialOnly() {
  hideAll();
  showSocial();    
  }  

  // Show All  
  function funcShowAll() {
  showLawyer();
  showSocial();
  }
    
  // Hide All Assignments Function
  function hideAll() {
  hideSocial();
  hideLawyer();
  }
    
  // Hide All Social Roles Function
  function hideSocial() {
  const allSocial = document.getElementsByClassName("social");
  for (let i = 0; i < allSocial.length; i++) {
    hideItems(allSocial[i])
  }
  }

  // Show All Social Roles Function
  function showSocial() {
  const allSocial = document.getElementsByClassName("social");
  for (let i = 0; i < allSocial.length; i++) {
    showItems(allSocial[i])
  }
  }

  // Hide All Lawyer Roles Function
  function hideLawyer() {
  const allLawyer = document.getElementsByClassName("lawyer");
  for (let i = 0; i < allLawyer.length; i++) {
    hideItems(allLawyer[i])
  }
  }

  // Show All Lawyer Roles Function
  function showLawyer() {
  const allLawyer = document.getElementsByClassName("lawyer");
  for (let i = 0; i < allLawyer.length; i++) {
    showItems(allLawyer[i])
  }
  } 
    
  // Universal Function to Hide Things
  function hideItems(n) {
      n.style.display = "none";
  }

  // Universal Function to Show Things
  function showItems(n) {
      n.style.display = "inline";
  }

