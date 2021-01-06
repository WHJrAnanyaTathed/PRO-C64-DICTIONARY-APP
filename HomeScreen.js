import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

<Text Input
  style={styles.inputBox}
  onChangeText={text=>{
this.setState({
  text: text,
  isSearchPressed: false,
  word : "Loading.....",
  lexicalcategory :'',
  examples : [],
  defination :"",
  });
}}
  value={this.state.text}
  />

  <TouchableOpacity
  style={styles.searchButton}
  onPress={ ()=>{
    this.setState({isSearchPressd: true});
    this.getWord(this.state.text)
  }}>
</TouchableOpacity>
getWord=(word)=>{
  var searchKeyword=word.toLowerCase()
  var url = 'https://rupinwhitehatjr.github.io/dictionary/%22+searchKeyword+%22.json'
  //console.log(url)
  .then((data)=>{
    if(data.status===200)
    {
      return data.json()
    }
    examples{
      return null
    }
});
.then((response)=>{
  var responseObject = response

  if(responseObject)
  {
    var wordData = responseObject.definitions[0]
    var definition=wordData.description
    var lexicalcategory=wordData.wordtype
    
    this.setState({
      "word":this.state.text,
      "definition":definition,
      "lexicalcategory":lexicalcategory,
    
    })

  }
else
{
  this.setState({
    "word":this.state.text',
      "definition":"not found",
  })
}

})

}
return(){
render(
  
<View style={styles.detailsContainer}>
<Text style={styles.detailsTitle}
word:{""}
</Text>
<Text style={{fontSize:18}}>
{this.state.word}
</Text>
</View>

<View style={styles.detailsContainer}>
<Text style={styles.detailsTitle}
Type:{""}
</Text>
<Text style={{fontSize:18}}>
{this.state.lexicalcategory}
</Text>
</View>

<View style ={{flexDirection:'row',flexWrap:'wrap'}}>
<Text style={styles.detailsTitle}
Definition:{""}
</Text>
</View>
)
}





















