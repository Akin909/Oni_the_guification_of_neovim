/* eslint-disable */
import React, { Component } from "react";
import styled from "react-emotion";

// Import Spectacle Core tags
import {
  Layout,
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

import pluginExample from "./plugin-example";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// import pics
import bryan from "./images/bryan.png";
import ryan from "./images/ryan.png";
import manuel from "./images/manuel.jpg";
import tal from "./images/tal.jpg";
import me from "./images/akin.jpg";

import v2architecture from "./images/v2-architecture.png"
import monzoLogo from "./images/monzo.png"
import oniLogo from "./images/oni-header.png";
import gitblamePlugin from "./images/git_blame.png";
import imageLayerPlugin from "./images/image_layer_plugin.png";
import csvLayerPlugin from "./images/csv_layer_plugin.png"
import syntaxHighlighting from "./images/highlighting.png";
import lspGif from "./images/lsp.gif";

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

export default class Presentation extends Component {
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
            Introduce myself the project, explain that I'm a collaborator. Shout
            out to oni's awesome maintainer, collaborators and community.
          </Notes>
        </Slide>
        <Slide textSize={40}>
          <p>Hi 👋🏾</p>
          <p>Software Developer</p>
          <figure>
            <Image width="100px" src={monzoLogo}/>
            <figcaption>Monzo</figcaption>
          </figure>
          <p>Based in the UK</p>
          <p>Github => <S type="underline">Akin909</S></p>
          <p>Twitter => <S type="underline">@Akin_So</S></p>
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
              <Figure>
                <Image width="250px" src={me} />
                <figcaption>Akin</figcaption>
              </Figure>
            </Fill>
          </Layout>
          <Notes>
            Big shout out to all of the people who have contributed to the
            project Hoschi, PsxPaul, feltech and the all of the people who back
            the project
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6}>Talking Points</Heading>
          <List textColor="secondary">
            <ListItem>What is Oni?</ListItem>
            <ListItem>Oni's Architecture</ListItem>
            <ListItem>Oni's Extensibility</ListItem>
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
            Vim has classically been seen as a terminal application, with the
            exception of MacVim. That has changed since neovim, which can be
            embedded inside other programs
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
            <ol>
              <li>
                Its now possible to create an IDE with neovim at its core that
                provides the power and speed of modal editing combined with the
                nicieites and utilties of a GUI IDE
              </li>
              <li>
                A key difference between Oni and alternatives like vscode or
                sublime with a vim plugin is that at its core Oni is just
                neovim,
              </li>
              <li>
                That means it uses your vim config with all your carefully
                crafted mappings and scripts and you can use all of your plugins
                as normal
              </li>
            </ol>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={6} margin="0 0 25px 0">
            Syntax Highlighting 😍
          </Heading>
          <Image width="600px" src={syntaxHighlighting} />
          <Text textSize={24}>Theme => Night Owl </Text>
        </Slide>
        <Slide>
          <Heading size={6} margin="0 0 25px 0">
            Language Server Features 💻
          </Heading>
          <Image src={lspGif} />
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={6}>Oni's Architecture</Heading>
          <Text margin="10px 0 0" size={6} textAlign="left">
            Oni is an electron app, written with React & Typescript which speaks
            with Neovim via it's <S type="italics">msgpack API</S>. The editor text is rendered via webgl or canvas
          </Text>
          <Notes>
            Describe the advantages (well supported, cross-platform) and
            disadvantages (i.e. memory consumption, performance bottleneck) of
            Electron
          </Notes>
        </Slide>
        <Slide>
          <Heading size={6}>Where are we now? 🤔</Heading>
          <Layout>
            <Fill>
              <Text fit>
                Some of Oni's most recently implemented features include -
              </Text>
              <List>
                <ListItem textSize={28} margin="0 0 15px 0">
                  <S type="bold">Syntax highlighting</S> based on Textmate
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
                <ListItem textSize={28} margin="0 0 15px 0">
                  <S type="bold">Browser Extension</S> - This allows users to
                  open a browser as an oni split as an oni split.
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={6}>5min Demo 🙏 😟</Heading>
          <Notes>
            <ol>
              <li>Input: show keypresses to start</li>
              <li>Make fake function to show autocomplete and errors</li>
              <li>open file with command palette</li>
              <li>navigate with sneak (ctrl-g)</li>
              <li>demo file explorer</li>
            </ol>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={6}>Extensibility</Heading>
          <Text textSize={25}>Oni can be extended via plugins.</Text>
          <br />
          <CodePane source={pluginExample} lang="js" />
          <Notes>
            <ol>
              <li> Here is a section of code for Oni's status bar</li>
              <li>
                An Oni plugin specifies an activate method, which oni picks up
                on startup
              </li>
              <li>
                each activate function is passed the Oni object which is an
                exposed section of Oni's api. With it you can create statusbar
                items or menus, sidebar items etc.
              </li>
              <li>
                this example shows how to create a status bar item with a github
                logo and which on click opens the repo on github
              </li>
            </ol>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={6}>Some Oni Plugins</Heading>
        </Slide>
        <Slide>
          <Heading size={6} margin={2}>
            Git Blame Plugin
          </Heading>
          <Image src={gitblamePlugin} />
        </Slide>
        <Slide>
          <Heading size={6} margin={2}>
            Image Layer Plugin
          </Heading>
          <Image src={imageLayerPlugin} />
        </Slide>
        <Slide>
          <Heading size={6} margin={2}>
            CSV Layer Plugin
          </Heading>
          <Image height="20em" src={csvLayerPlugin} />
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
            advantages of the ecosystem the peformance tradeoff might be too
            great. So...
          </Text>
        </Slide>
        <Slide>
          <Text>We are prototyping Oni V2 (reOni?)</Text>
          <br />
          <Text>
            which will use a highly performant
            <S type="bold"> ReasonML</S> based desktop application framework we
            are developing called <S type="bold">Revery</S>.
          </Text>
        </Slide>
        <Slide>
          <Heading margin="0 0 20px 0" size={6}>reOni (Oni V2) Proposed architecture</Heading>
          <Image src={v2architecture} />
        </Slide>
        <Slide>
          <Heading size={6}>Useful Links</Heading>
          <List>
            <ListItem textSize={25}>
              Oni website - https://www.onivim.io/
            </ListItem>
            <ListItem textSize={25}>
              Oni Repository - https://github.com/onivim/oni
            </ListItem>
            <ListItem textSize={25}>
              Oni Api documentation -
              https://onivim.github.io/oni-api/globals.html
            </ListItem>
            <ListItem textSize={25}>
              Discord Link - https://discord.gg/7maEAxV
            </ListItem>
            <ListItem textSize={25}>
              Revery - https://github.com/bryphe/revery
            </ListItem>
            <ListItem textSize={25}>
              Revery Quick start - https://github.com/bryphe/revery-quick-start
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>Questions?</Text>
        </Slide>
      </Deck>
    );
  }
}
