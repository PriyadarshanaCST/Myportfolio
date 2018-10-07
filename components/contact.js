import React,{ Component } from 'react';
import {Grid, Cell, List,ListItem,ListItemContent }from 'react-mdl';


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
        <Cell col={6}>
<h2>Kapila Priyadarshana</h2>

<img
src="https://scontent.fcmb4-1.fna.fbcdn.net/v/t1.0-9/28471211_1775319379198229_3678535946341700373_n.jpg?_nc_cat=111&oh=3903cbcc625477c24599340a1bb190ac&oe=5C57C3C0"
alt="myimage"
style={{height: '250px'}}
className="my-image"
  />
  <p style={{width : '75%' , margin: 'auto', paddingTop: '1em'}}> I am the Undergraduate of Uva Wellassa University of Sri Lanka.
   I am following the B.Sc. In Computer Science And Technology Degree Programe at UWU.</p>

        </Cell>
              <Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>
<div className="contact-list">
<List>
  <ListItem>
    <ListItemContent style={{fontSize: '30px',fontFamily: 'Anton'}}>
<i className="fa fa-phone-square" aria-hidden="true"/>
(071) 4795834
    </ListItemContent>
</ListItem>

<ListItem>
  <ListItemContent style={{fontSize: '30px',fontFamily: 'Anton'}}>
<i className="fa fa-fax" aria-hidden="true"/>
(063) 2246106
  </ListItemContent>
</ListItem>


<ListItem>
  <ListItemContent style={{fontSize: '30px',fontFamily: 'Anton'}}>
<i className="fa fa-envelope" aria-hidden="true"/>
kapilacst@gmail.com
  </ListItemContent>
</ListItem>




<ListItem>
  <ListItemContent style={{fontSize: '30px',fontFamily: 'Anton'}}>
<i className="fa fa-skype" aria-hidden="true"/>
priyadarshanacs
  </ListItemContent>
</ListItem>








  </List>
  </div>
</Cell>


        </Grid>
      </div>
    )
  }
}
export default Contact;
