import React from 'react';
import Section from 'components/controls/section';
import Heading3 from 'components/controls/heading3';
import TextInput from 'components/controls/textinput';
import MultilineTextInput from 'components/controls/multilineinput';

const HomePage = () => {

  const
    page = <div className="container" style={{border: "solid red 1px"}}>

      <Section id="section1" title="Section One">
        <Heading3 text="Name"/>
        <TextInput text="Elwood P. Suggins"/>
        <Heading3 text="City"/>
        <TextInput text="Dogpatch"/>
      </Section>

      <Section id="section2" title="Section Two">
        <Heading3 text="Hobby"/>
        <TextInput text="Coffee tasting"/>
        <Heading3 text="Occupation"/>
        <TextInput text="Meeting attendee"/>
      </Section>

      <Section id="section3" title="Section Three">
        <Heading3 text="Notes"/>
        <MultilineTextInput text="To  be or not to be, that is the ... gazornanplatt.
                To  be or not to be, that is the ... gazornanplatt.
                To  be or not to be, that is the ... gazornanplatt.
                To  be or not to be, that is the ... gazornanplatt.
                To  be or not to be, that is the ... gazornanplatt.
                To  be or not to be, that is the ... gazornanplatt."></MultilineTextInput>
        <Heading3 text="Favorite Thing"/>
        <TextInput text="Coding"/>
      </Section>

      <Section id="sectionEnd" title=""/>

    </div>;

  return page;

};

export default HomePage;
