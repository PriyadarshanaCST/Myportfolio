import React,{ Component } from 'react';
import {Grid , Cell } from 'react-mdl';
import Education from './education';
import  Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (

<div>
  <Grid>
    <Cell col={4}>
<div style={{textAlign: 'center'}}>
<img
src="https://scontent.fcmb4-1.fna.fbcdn.net/v/t1.0-9/28471211_1775319379198229_3678535946341700373_n.jpg?_nc_cat=111&oh=3903cbcc625477c24599340a1bb190ac&oe=5C57C3C0"
alt="myimage"
style={{height: '200px'}}
className="my-image"
  />

</div>

<h2 style={{paddingTop: '2em'}}>Kapila Priyadarshana</h2>
<h4 style={{color: 'grey'}}>Programmer</h4>
<hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

<p>
I am following Computer Science And Technology Degree Programe at Uva Wellassa University.
I am the Web Developer and Game Developer.

</p>
<hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

<h5>Address</h5>

<p> No: 111/E, Bank Place, Padiyathalawa.</p>
<h5> (071) 4795834</h5>

<h5>Email</h5>
<p> kapilacst@gmail.com</p>

<h5> Web</h5>
<p>kapilapriyadarshana.com</p>

<hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

    </Cell>
    <Cell className="resume-right-col" col={8}>
    <h2>Education</h2>


    <Education
    startYear={2000}
    endYear={2010}
    schoolName="Padiyathalawa Centrel(National) College"
    schoolDescription ="Padiyathalawa Centrel Collage is  one of the best college for learnig Students well.   "
    />


<Education
startYear={2011}
endYear={2013}
schoolName="Badulla Centrel College"
schoolDescription ="Badulla Centrel Collage is  one of the best college for learnig Students well.   "

/>

<Education
startYear={2014}
endYear={2019}
schoolName="Uva Wellassa University Of Sri Lanka"
schoolDescription ="To produce well-rounded, employable, technocratic and entrepreneurial graduates equipped with knowledge, skills,
values and attitudes to make outstanding contributions to the national development.To excel in teaching, learning and research with a strong emphasis on value addition to the national resources."
/>


<hr style={{borderTop: '3px solid #e22947'}} />

<h2>Experience</h2>

<Experience
startYear={2014}
endYear={2019}
jobName="Undergraduate"
jobDescription="I am the Undergraduate of Uva Wellassa University of Sri Lanka. I am developing Web sites and developing Games."
/>


<Experience
startYear={2019}
endYear={2020}
jobName="Web Developer as Undergraduate Induastrial training Internship "
jobDescription=" I am developing Web sites and developing Games at Vitual Matix Company."
/>

<hr style={{borderTop: '3px solid #e22947'}} />

<h2>Skills</h2>

< Skills
skill ="Javascript"
progress ={80}
 />

 < Skills
 skill ="HTML/CSS"
 progress ={90}
  />

  < Skills
  skill ="NodeJs"
  progress ={50}
   />

   < Skills
   skill ="React"
   progress ={50}
    />

    < Skills
    skill ="Angular"
    progress ={40}
     />
     < Skills
     skill ="VueJs"
     progress ={30}
      />
      < Skills
      skill ="MongoDB"
      progress ={50}
       />
       < Skills
       skill ="React Native"
       progress ={50}
        />

        < Skills
        skill ="Laravel"
        progress ={50}
         />
         < Skills
         skill ="Arduino"
         progress ={50}
          />






    </Cell>
  </Grid>

</div>
    )
  }
}
export default Resume;
