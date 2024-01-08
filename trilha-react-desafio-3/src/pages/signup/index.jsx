import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, FacaLoginText, Row, Wrapper ,LoginAnchor} from './styles';

const Signup = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        api.post(`/users`,
                                            {id: formData.rgn_id,
                                            name: `${formData.name}`,
                                            email: `${formData.email}`,
                                            senha: `${formData.senha}`})
        .then(function () {
            navigate('/login') 
            return
        })
        .catch( function (){
            alert('Registro invalido.')
        });

    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts,
                     dominar as principais tecnologias e entrar mais rápido nas 
                     empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input type="hidden" name="rgn_id" control={control}/>
                        <Input placeholder="Nome Completo" leftIcon={<MdPerson />} name="name" control={control} />
                        {errors.name && <span>Nome é obrigatório</span>}
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <SubtitleLogin>Ao clicar em "criar minha conta grátis", 
                            declaro que aceito as Políticas de Privacidade e os 
                            Termos de Uso da DIO.
                        </SubtitleLogin>
                    </Row>
                    <Row>
                        <FacaLoginText >Já tenho conta.</FacaLoginText>
                        <LoginAnchor href="/login">Fazer login</LoginAnchor>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Signup }