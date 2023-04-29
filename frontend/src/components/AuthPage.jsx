import axios from 'axios';

const AuthPage = ({ onAuth }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios
            .post('http://localhost:3001/authenticate', { username: value })
            .then((r) => onAuth({ ...r.data, secret: value }))
            .catch((e) => console.log(e));
        onAuth({ username: value, secret: value });
    };
    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Bem vindo!</div>
                <div className="form-subtitle">
                    Informe um apelido para iniciar
                </div>
                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input type="text" className="auth-input" name="username" />
                    <button type="submit" className="auth-button">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};
export default AuthPage;
