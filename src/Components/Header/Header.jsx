
import profile from '../../assets/images/profile.png'

const header = () => {
    return (
        <header className='md:flex justify-between md:max-w-7xl mx-auto p-6 items-center'>
             <h1 className='text-4xl font-bold'>knowledge cafe</h1>
             <img src={profile} alt="" />

        </header>
    );
};

export default header;