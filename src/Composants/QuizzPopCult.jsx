import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';



const QuizzPopCult = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
        question: "Quel est le nom du chien de Samy ?",
        options: ["Scooby Doo", "Max", "Rintintin", "Milou"],
        correctAnswer: "Scooby Doo",
        points: 10
    },
    {
        question: "Quel célèbre flic homme-robot a été adapté en comics par Frank Miller ?",
        options: ["Terminator", "Malcom", "Bender", "Robocop"],
        correctAnswer: "Robocop",
        points: 10
    },
    {
        question: "Quels personnage ne fait pas partie de l'équipe des Gardiens de la galaxie ?",
        options: ["Star Lord", "Thanos", "Rocket", "Drax"],
        correctAnswer: "Thanos",
        points: 10
    },
    {
        question: "Quel est le film français le plus populaire des années 80 ?",
        options: ["Le grand bleu", "Le père Noël est une ordure", "Le diner de cons", "La boom"],
        correctAnswer: "La boom",
        points: 10
    },
    {
        question: "Quel film Steven Spielberg n’a pas réalisé?",
        options: ["Jurassic Park", "Indiana Jones", "E.T l'extra-terrestre", "Star Wars"],
        correctAnswer: "Star Wars",
        points: 10
    },
    {
        question: "Quel film supposé de Tim Burton n'a pas été réalisé par Tim Burton ?",
        options: ["Batman", "Charlie et la chocolaterie", "La planète des singes", "Edward aux mains d'argent"],
        correctAnswer: "La planète des singes",
        points: 10
    },
    {
        question: "Quel est le premier grand succès des Spice Girls ?",
        options: ["Wannabe", "Spice up your life", "2 become 1", "Say you'll be there"],
        correctAnswer: "Wannabe",
        points: 10
    },
    {
        question: "Quel est le groupe français le plus célèbre des années 80 ?",
        options: ["Les Rita Mitsouko", "Les Enfoirés", "Les Innocents", "Telephone"],
        correctAnswer: "Telephone",
        points: 10
    },
    {
        question: "Quelle est la plus grande peur de Barracuda dans l’Agence tout risques ?",
        options: ["Les araignées", "bateau", "Les serpents", "L'avion"],
        correctAnswer: "l'avion",
        points: 10
    },
    {
        question: "A qui Elton John a t-il dédié sa chanson 'Candle in the wind' en 1997 ?",
        options: ["A Freddie Mercury", "A Michael Jackson", "A John Lennon", "A Lady Diana"],
        correctAnswer: "A Lady Diana",
        points: 10
    },


  ];




  const handleAnswer = (answer) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswers([...answers, answer]);
    } else {
      setIsFinished(true);
      setAnswers([...answers, answer]);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setIsFinished(false);
  };

  useEffect(() => {
    let score = 0;
    answers.forEach((options, index) => {
      if (options === questions[index].correctAnswer) {
        score++;
      }
    });
    setScore(score);
  }, [answers]);

  if (isFinished) {
    return (
      <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h1>Quizz Pop Culture</h1>
              <h2>Vous avez terminé le quizz ! Votre score est de {score} pts sur 100</h2>
              <div className='commentaire'>{{

                
                    0 : <div><h3>T'es archinul</h3> <img src="https://www.gifimili.com/gif/2018/02/tristesse.gif" alt="Tristesse" /></div>,
                    1 :  <div><h3>T'es nul</h3>  <img src="https://tenor.com/fr/view/uka-uka-i%C3%A5s2020-%C3%A5s-alle-tiders-alle-gif-16545451" alt="danse swift" /></div>,
                    2 :  <div><h3>T'es nul</h3>  <img src="https://tenor.com/fr/view/uka-uka-i%C3%A5s2020-%C3%A5s-alle-tiders-alle-gif-16545451" alt="danse swift" /></div>,
                    3 :  <div><h3>T'as aucune culture pop!!!</h3>  <img src="https://tenor.com/bKF6A.gif" alt="danse swift" /></div>,
                    4 :  <div><h3>T'as aucune culture pop mais c'est pas foutu</h3>  <img src="https://tenor.com/bKF6A.gif" alt="danse swift" /></div>,
                    5 :  <div><h3>Peut mieux faire</h3>  <img src="https://tenor.com/fr/search/wkanda-gifs" alt="danse swift" /></div>,
                    6 :  <div><h3>Wakanda t'encourage</h3>  <img src="https://tenor.com/fr/search/wkanda-gifs" alt="danse swift" /></div>,
                    7:  <div><h3>Tu y est presque!!!</h3>  <img src="https://tenor.com/fr/view/dhalsim-street-fighter-alpha-dancing-victory-gif-17716797" alt="Lord Raiden" /></div>,
                    8:  <div><h3>Très bonne culture pop!!!</h3>  <img src="https://tenor.com/fr/view/dhalsim-street-fighter-alpha-dancing-victory-gif-17716797" alt="Lord Raiden" /></div>,
                    9:  <div><h3>Excellent!!!</h3>  <img src="https://media.tenor.com/-_CuKtWc3-EAAAAC/mortal-kombat-mortal-kombat11.gif" alt="danse swift" /></div>,
                    10: <div><h3>Flawless Victory!!!</h3>  <img src="https://media.tenor.com/-_CuKtWc3-EAAAAC/mortal-kombat-mortal-kombat11.gif" alt="danse swift" /></div>
                }[score]


              }
              </div>
              <Button onClick={handleReset}>Recommencer</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    )
  }


  return (
    <Container className='quizzContainer'>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h1>Quizz Pop Culture</h1>
              <h2>{questions[currentQuestion].question}</h2>
              {questions[currentQuestion].options.map((option, index) => (
                <Button key={index} onClick={() => handleAnswer(option)}>{option}</Button>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizzPopCult;




                