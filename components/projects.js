import React,{ Component } from 'react';
import { Tabs, Tab,Grid,Cell,Card, CardTitle,CardText , CardActions, Button ,CardMenu,IconButton } from 'react-mdl';

class Projects extends Component {
constructor(props){
 super(props);
 this.state ={activeTab: 0 };

}

toggleCategories(){
  if(this.state.activeTab === 0){
  return(

<div className ="projects-grid">
<Card shadow={5} style={{minWidth: '450' ,margin: 'auto'}}>
<CardTitle style={{color: 'white',height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2000/1*Xt3l-_54wuxdsHpiolGP3g.jpeg) center / cover'}}> React Project #1</CardTitle>
  <CardText>
This is my ReactJs app about my portfolio.You can see it and view details about me.
  </CardText>
    <CardActions border>
    <Button colored>Github</Button>
    <Button colored>CodePen</Button>
    <Button colored>LiveDemo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
 </CardMenu>
</Card>




<Card shadow={5} style={{minWidth: '450' ,margin: 'auto'}}>
<CardTitle style={{color: 'white',height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2000/1*Xt3l-_54wuxdsHpiolGP3g.jpeg) center / cover'}}> React Project #2</CardTitle>
  <CardText>
This is my Reactjs app.You can see it and view details about my project.
  </CardText>
    <CardActions border>
    <Button colored>Github</Button>
    <Button colored>CodePen</Button>
    <Button colored>LiveDemo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
 </CardMenu>

</Card>


<Card shadow={5} style={{minWidth: '450' ,margin: 'auto'}}>
<CardTitle style={{color: 'white',height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2000/1*Xt3l-_54wuxdsHpiolGP3g.jpeg) center / cover'}}> React Project #3</CardTitle>
  <CardText>
This is my Reactjs app.You can see it and view details about my project.
  </CardText>
    <CardActions border>
    <Button colored>Github</Button>
    <Button colored>CodePen</Button>
    <Button colored>LiveDemo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
 </CardMenu>

</Card>






</div>

  )
  }else if (this.state.activeTab === 1) {

  return(

    <div><h1>This is Angular</h1></div>
  )
}else if (this.state.activeTab === 2) {

  return(

<div><h1>This is VueJS</h1></div>
  )
} else if (this.state.activeTab === 3) {

  return(

<div><h1>This is Laravel</h1></div>
  )
} else if (this.state.activeTab === 4) {

  return(

<div><h1>This is MongoDB</h1></div>
  )
}else if (this.state.activeTab === 5) {

  return(

<div><h1>This is Arduino</h1></div>
  )
  }
}


  render() {
    return (
      <div>
      <Tabs activeTab={this.state.activeTab } onChange={(tabId) => this.setState({activeTab: tabId })} ripple >

      <Tab>React</Tab>
      <Tab>Angular</Tab>
      <Tab>VueJs</Tab>
      <Tab>Laravel</Tab>
      <Tab>MongoDB</Tab>
      <Tab>Arduino</Tab>
  </Tabs>

<Grid>
<Cell col={12}>
  <div className="content">{this.toggleCategories()}</div>
</Cell>
</Grid>

      </div>
    )
  }
}
export default Projects;
