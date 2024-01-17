import LikeButton from './like-button';

const Header = ({ title }) => {
    return <h1>{ title ? title : 'Default Title' }</h1>;
};

const HomePage = () => {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map(name => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
};

export default HomePage;