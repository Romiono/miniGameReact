import React, {useState} from "react";
import './styles/App.css'
import Tblock from "./components/textBlocks/Tblock";
import Image from './images/BG1.png'
import AuthInput from "./components/inputs/AuthInput";
import Modal from "./components/modalWindows/Modal";
import AuthButton from "./components/buttons/AuthButton";
import OriginButton from "./components/buttons/OriginButton";

function App() {
    const [modal, setModal] = useState(false)
  return (
    <div className="App">
        <OriginButton value={'Войти'} onClick={() => setModal(true)}/>
        <Modal visible={modal} setVisible={setModal}>
            <AuthInput preview={'Login'} type={'text'}/>
            <AuthInput preview={'Password'} type={'password'}/>
            <AuthButton value={'Войти'} onClick={() => setModal(false)}></AuthButton>
        </Modal>
        <Tblock
          title={'О проекте'}
          value={`Проект представляет собой веб-платформу, спроектированную с использованием языков разметки HTML и CSS,
           а также фреймворка React.js, служащего основным стержнем разработки. Целью проекта является агрегация 
           множества настольных игр на одной онлайн-платформе с обширными функциональными возможностями. Данный ресурс 
           предоставляет пользователям возможность ознакомления с разнообразным спектром игр, предоставляя подробные
           описания, иллюстративный материал и функционал оценки и обсуждения. Интерфейс сайта призван обеспечивать 
           удобство использования, а его эстетическое оформление направлено на создание приятного опыта для 
           посетителей. Проект остается ценным вкладом для аудитории, обладающей интересом к настольным играм, и 
           представляет собой свидетельство амбициозных усилий авторов в реализации данной идеи.`}
          img={require('./images/hexagone.png')}
        />
        <img style={{position: "relative", width: '100%' }} src={Image} alt={'1.png'}/>
        <Tblock
          title={'Типа об идее'}
          value={`Идея создания веб-платформы с настольными играми зародилась на основе пристрастия и глубокой
           привязанности авторов к данному увлечению. Оба автора, представляющие собой джунов в области разработки 
           программного обеспечения, обнаружили необходимость в едином ресурсе, который бы предоставлял обширный каталог
           настольных игр с соответствующими описаниями и возможностью обсуждения. Эманация идеи произошла во время
           встречи авторов во время игрового сеанса, где они активно обсуждали разнообразные аспекты игр и их 
           особенности. Возможность объединить всю эту информацию на одной онлайн-платформе стала очевидной. Перед 
           ними встала задача создания удобного и информативного ресурса, способного удовлетворить потребности как 
           самих авторов, так и широкой аудитории игроков.
           `}
          img={require('./images/D20.png')}
        />
    </div>
  );
}

export default App;
