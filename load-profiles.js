function loadProfiles(userNames){

    const MAX_USERS = 15;
  
    if(userNames.length > MAX_USERS){
        return false;
    }
    
    for(let i=0; i < userNames.length; i++){
        _fetchProfile(userNames[i], function(data){
          _addToSidebar(userNames[i], data);
      });
    }
  }
  
  function loadProfiles(userNames = [], {profilesClass, reverseSort} = {}) {
 
    profilesClass = profilesClass || ".user-profile";
    reverseSort   = reverseSort   || false;
   
    if(reverseSort) {
      userNames = _reverse(userNames);
    }
   
    _loadProfilesToSideBar(userNames, profilesClass);
  }