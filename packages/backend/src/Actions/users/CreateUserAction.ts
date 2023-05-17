import User from '@/Models/User';

export const createUser = async () => {
  try {
    console.log(
      await User.create({
        name: 'Toctive',
        email: 'testing@toctive.com',
        password: '123456',
      })
    );
  } catch (error) {
    console.log(error);
  }
};
export default createUser;
