class TagManager{
    constructor(topicId){
       this.topicId = topicId; 
    }
    addTag(tagName){
    API.createTag(tagName, this.topicId);
  }
  
  removeTag(tagName){
    API.deleteTag(tagName, this.topicId);
  }
}
class SidebarAdvertisement extends Advertisement{
    constructor(title, link){
        super(title, link);  
    }
 _linkText(){
    return "Sign up now!";
  }
}