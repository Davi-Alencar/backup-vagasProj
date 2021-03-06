import React, { useState } from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index';
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';
import ImgBahia from '../../../assets/images/empresa/bahiano.jpeg';
import Banner2 from '../../../assets/images/Space.svg'
import ImgBrq from '../../../assets/images/empresa/BRQ.png';
import ImgIntelli from '../../../assets/images/empresa/intelitrader.jpeg';
import ImgSpace from '../../../assets/images/empresa/spaceneedlelogo.jpeg';
import ImgRede from '../../../assets/images/empresa/daredelogo.jpeg';
import ImgSnoopy from '../../../assets/images/snoopy.jpeg';
import ImgNao from '../../../assets/images/nao.jpeg';
import ImgRenan from '../../../assets/images/Renan.jpg';
import ImgDavi from '../../../assets/images/Davi.jpg';
import ImgErick from '../../../assets/images/Erick.jpg';
import ImgGabi from '../../../assets/images/Gabi.jpg'

function LoginEmpresa() {

  let history = useHistory();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');


  const logar = () => {
    const logarCom = {
      email: email,
      senha: senha

    }
    fetch('https://localhost:5001/api/Login', {
      method: 'POST',
      body: JSON.stringify(logarCom),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(dados => {
        if (dados.token !== undefined) {
          localStorage.setItem('tokengovagas', dados.token)

          history.push('/');
        }
        else {
          alert('Senha e/ou Email invalidos');
        }
      })
      .catch(error => console.error(error));
  }
  const cadastrar = () => {
    const cadastrarCom = {
      email: email,
      senha: senha,
      cnpj: cnpj,
      telefone: telefone

    }
    localStorage.setItem('email-cadastro', email)
    localStorage.setItem('senha-cadastro', senha)
    localStorage.setItem('cnpj-cadastro', cnpj)
    localStorage.setItem('telefone-cadastro', telefone)
    history.push('/cadastroEmpresa')
  }

  return (
    <div>
      <Header />
      <div className="loginH1">
        <h1>Login como Empresa</h1>
      </div>
      <div className="loginCandidato">
        <div>
          <div className="slide-carrossel-login">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
<<<<<<< HEAD
                  <img src={ImgIntelli} className="d-block w-200" alt="..." />
=======
                  <img src={ImgErick} className="d-block w-200" alt="..." />
>>>>>>> c7766c97680359a184d4f9cee06d54edb525bd39
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Intelitrader</h5>
                    <p>“O SENAI de Informática  me proporcionou grandes aprendizados e com isso consegui uma vaga na empresa AVANAD uma empresa global de serviços profissionais que fornece consultoria e serviços de TI
          focados na plataforma Microsoft com inteligência artificial, análise de negócios...’’</p>
                  </div>
                </div>
                <div className="carousel-item">
<<<<<<< HEAD
                  <img src={ImgBrq} className="d-block w-200" alt="..." />
=======
                  <img src={ImgRenan} className="d-block w-200" alt="..." />
>>>>>>> c7766c97680359a184d4f9cee06d54edb525bd39
                  <div className="carousel-caption d-none d-md-block">
                    <h5>BRQ</h5>
                    <p>“O SENAI de Informática  me proporcionou grandes aprendizados e com isso consegui uma vaga na empresa AVANAD uma empresa global de serviços profissionais que fornece consultoria e serviços de TI focados
          na plataforma Microsoft com inteligência artificial, análise de negócios...’’</p>
                  </div>
                </div>
                <div className="carousel-item">
<<<<<<< HEAD
                  <div className="flexImg">
                    <img src={Banner2} className="d-block w-200" alt="..." />
                  </div>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>SpaceNeedle</h5>
                    <p>O SENAI de Informática  me proporcionou grandes aprendizados e com isso consegui uma vaga na empresa AVANAD uma empresa global de serviços profissionais que fornece consultoria e serviços de TI focados
          na plataforma Microsoft com inteligência artificial, análise de negócios...’’.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={ImgRede} className="d-block w-200" width="900px" height="450px" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>DAREDE</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
=======
                  <img src={ImgDavi} className="d-block w-200" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                  <h5>Tecnico em Análise e Desenvolvimento de Sistemas</h5>
                    <p>“O SENAI de Informática  me proporcionou grandes aprendizados e com isso consegui uma vaga na empresa AVANAD uma empresa global de serviços profissionais que fornece consultoria e serviços de TI
          focados na plataforma Microsoft com inteligência artificial, análise de negócios...’’</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={ImgGabi} className="d-block w-200" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                  <h5>Tecnico em Análise e Desenvolvimento de Sistemas</h5>
                    <p>“O SENAI de Informática  me proporcionou grandes aprendizados e com isso consegui uma vaga na empresa AVANAD uma empresa global de serviços profissionais que fornece consultoria e serviços de TI
          focados na plataforma Microsoft com inteligência artificial, análise de negócios...’’</p>
>>>>>>> c7766c97680359a184d4f9cee06d54edb525bd39
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span> {/* setinha aqui */}
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span> {/* aqui tabém :) */}
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="login">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Cadastrar-se</a>
              </li>
            </ul>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                <form onSubmit={event => {
                  event.preventDefault()
                  logar()
                }}>
                  <div className="login-login">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                      <div className="login-inputs">
                        <Input label="" type="text" name="input22" placeholder="E-mail" minLength={8} maxLength={100} value={email} onChange={a => setEmail(a.target.value)} />
                        <tr />
                      </div>
                      <div className="login-inputs">
                        <Input label="" type="password" name="input22" placeholder="Senha" minLength={4} maxLength={100} value={senha} onChange={a => setSenha(a.target.value)} />
                        <tr />
                        <p>Esqueceu sua senha?</p>
                      </div>
                      <div className="btn-criarconta">
                        <Button name="btn1" value="Login" />
                      </div>
                      <div className="login-inputs">
                        <tr className="tr-empresa" />
                        <Link to="/loginCandidato"><h1 className="h1-empresa1">Eu sou um aluno</h1></Link>
                      </div>
                    </div>
                  </div>
                </form>




              </div>


              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <form onSubmit={event => {
                  event.preventDefault()
                  cadastrar()
                }}>
                  <div className="login-login">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                      <div className="login-inputs1">
                        <Input label="" type="text" name="input22" placeholder="E-mail" minLength={8} maxLength={100} value={email} onChange={a => setEmail(a.target.value)} />
                        <tr />
                      </div>
                      <div className="login-inputs1">
                        <Input label="" type="password" name="input22" placeholder="Senha" minLength={8} maxLength={100} value={senha} onChange={a => setSenha(a.target.value)} />
                        <tr />
                      </div>
                      <div className="login-inputs1">
                        <Input label="" type="text" name="input22" placeholder="CNPJ" minLength={8} maxLength={100} value={cnpj} onChange={a => setCnpj(a.target.value)} />
                        <tr />
                      </div>
                      <div className="login-inputs1">
                        <Input label="" type="text" name="input22" placeholder="Telefone" minLength={8} maxLength={100} value={telefone} onChange={a => setTelefone(a.target.value)} />
                        <tr />
                      </div>
                      <div className="btn-criarconta1">
                        <Button name="btn1" value="Criar Conta" />
                      </div>
                      <div className="login-inputs">
                        <tr className="tr-empresa" />
                        <Link to="/loginCandidato"><h1 className="h1-empresa2">Eu sou uma aluno</h1></Link>
                      </div>
                    </div>
                  </div>


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default LoginEmpresa;
