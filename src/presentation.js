// Import React
import React from "react";
import styled from "react-emotion";

// Import Spectacle Core tags
import {
  Layout,
  Code,
  CodePane,
  Fill,
  Image,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Notes,
  S
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import code snippets
import pluginExample from "./example-plugin";

// import team pics
import bryan from "./images/bryan.png";
import ryan from "./images/ryan.png";
import manuel from "./images/manuel.jpg";
import tal from "./images/tal.jpg";

import oniLogo from "./images/oni-header.png";
import syntaxHighlighting from "./images/highlighting.png";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#03A9FC",
    secondary: "white",
    tertiary: "#1F2022",
    quartenary: "#CECECE"
  },
  {
    primary: "Fira Code",
    secondary: "Helvetica"
  }
);

const Figure = styled("figcaption")`
  display: inline-block;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["slide"]}>
          <Image src={oniLogo} />
          <Heading size={1} fit lineHeight={1}>
            The GUI-fication of Neovim
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={6}>
            Akin Sowemimo
          </Text>
          <Notes>
            <p>
              {`Introduce myself the project, explain that I'm a collaborator. Shout out
                to oni's awesome maintainer, collaborators and community.`}
            </p>
          </Notes>
        </Slide>
        <Slide textSize={40}>
          <p>Hi 👋🏾</p>
          <p>
            Software Developer @Monzo
            <br />
            Twitter -> @Akin_So
          </p>
        </Slide>
        <Slide textColor="tertiary">
          <Heading size={6}>The Team</Heading>
          <Layout>
            <Fill>
              <Figure>
                <Image width="250px" src={bryan} />
                <figcaption>Bryan</figcaption>
              </Figure>
              <Figure>
                <Image width="250px" src={ryan} />
                <figcaption>Ryan</figcaption>
              </Figure>
              <Figure>
                <Image width="250px" src={manuel} />
                <figcaption>Manuel</figcaption>
              </Figure>
              <Figure>
                <Image width="250px" src={tal} />
                <figcaption>Tal</figcaption>
              </Figure>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6}>Talking Points</Heading>
          <List textColor="secondary">
            <ListItem>What is Oni?</ListItem>
            <ListItem>Who is Oni for?</ListItem>
            <ListItem>Oni's Architecture</ListItem>
            <ListItem>Where are we now?</ListItem>
            <ListItem>The Future of Oni</ListItem>
          </List>
          <Notes>
            <p>Brief overview of what we are going to be talking about</p>
          </Notes>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={6}>What is Oni?</Heading>
          <Text margin="10px  0" size={6} textAlign="left">
            Oni is a Graphical User Interface(GUI) for Neovim.
          </Text>
          <Text margin="20px 0 0" size={6} textAlign="left">
            It allows users to have all the power of modal editing without the
            limitations of a terminal UI
          </Text>
          <Notes>
            <p>
              Discuss modal editing in brief (its vim conf so don't need to sell
              this too hard). However vim has classically been bound to the
              terminal although with the advent of neovim which can be embedded
              inside other programs
            </p>
          </Notes>
        </Slide>
        <Slide>
          <Text margin="15px 0" size={6} textAlign="left">
            But Oni does more than that.
          </Text>
          <br />
          <Text margin="10px 0 0" size={6} textAlign="left">
            Oni allows Neovim to have features of an IDE such as integration
            with <S type="italic">language servers</S> & more{" "}
            <S type="italic">advanced syntax highlighting</S>
          </Text>
          <Notes>
            <p>
              Its now possible to create an IDE with neovim at its core that
              provides the power and speed of modal editing combined with the
              nicieites and utilties of a GUI IDE.{" "}
            </p>
            <p>
              A key difference between Oni and alternatives like vscode or
              sublime with a vim plugin is that at its core Oni is just vim,
              that means it uses your vim config with all your carefully crafted
              mappings and scripts and you can use all of your plugins as normal
            </p>
          </Notes>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <Heading size={5} margin="0 0 15px 0">
                Syntax Highlighting
              </Heading>
              <Image width="600px" src={syntaxHighlighting} />
              <Text textSize={24}>Theme => Night Owl 😍</Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={6}>Who is Oni for?</Heading>
          <Text margin="10px 0 0" size={6} textAlign="left">
            Oni is a good choice for vim users who want the features of an IDE,
            or for new users who are curious about trying a fully fledged modal
            editor
          </Text>
          <Notes>
            This isn't to say that we purposely exclude any users however there
            are likely vim users who rely on vim's minimalism and portablility
            and a such having to download an app with a gui shell will not
            provide the right experience.
          </Notes>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={6}>Oni's Architecture</Heading>
          <Text margin="10px 0 0" size={6} textAlign="left">
            Oni is an electron app, written with React & Typescript which speaks
            with Neovim via the <Code>msgpack</Code> API.
          </Text>
          <Notes>
            Describe the advantages (well supported, cross-platform) and
            disadvantages (i.e. memory consumption, performance bottleneck) of
            Electron
          </Notes>
        </Slide>
        <Slide>
          <Heading size={6}>Where are we now?</Heading>
          <Layout>
            <Fill>
              <Text fit>
                Some of Oni's most recently implemented features include -
              </Text>
              <List>
                <ListItem textSize={28} margin="0 0 15px 0">
                  Syntax highlighting based on Textmate
                </ListItem>
                <ListItem textSize={28} margin="0 0 15px 0">
                  <S type="bold">File explorer</S> - which prioritises
                  navigation via the keyboard using vim-like mappings
                </ListItem>
                <ListItem textSize={28} margin="0 0 15px 0">
                  <S type="bold">Git Integration</S> - Only git is supported
                  right now but the framework exists to add more version control
                  providers
                </ListItem>
                <ListItem textSize={28} margin="0 0 15px 0">
                  <S type="bold">Achievements</S> - This functionality is aimed
                  at getting new users interested in learning to use vim
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide textSize={7}>
          <Heading size={6}>Extensibility</Heading>
          <Text>Oni can be extended via plugins.</Text>
          <br />
          <Text margin="20px 0">
            It's API is documented here ->
            https://onivim.github.io/oni-api/globals.html
          </Text>
          <CodePane lang="javascript" source={pluginExample} />
        </Slide>
        <Slide>
          <Heading size={5}>Where are we going?</Heading>
          <Text margin="10px 0 0" size={6} textAlign="left">
            Performance has always been one of the major advantages of using
            vim, it has always had a very quick startup time and not been too
            memory intensive.
          </Text>
        </Slide>
        <Slide>
          <Text margin="10px 0 0" size={6} textAlign="left">
            We feel that whilst electron and typescript have provided us the
            advantages of the ecosystem the tradeoff re. peformance might be too
            great. So...
          </Text>
        </Slide>
        <Slide>
          <Text>We are prototyping Oni V2</Text>
          <br />
          <Text>
            which will use a highly performant
            <S type="bold"> ReasonML</S> based desktop application framework we
            are developing called <S type="bold">Revery</S>.
          </Text>
          <Text margin="15px 0 0 0">
            This will eliminate the need to ship a chromium browser with the
            app.
          </Text>
        </Slide>
      </Deck>
    );
  }
}
