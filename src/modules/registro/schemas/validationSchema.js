import * as yup from 'yup';

export const schema = yup.object({
    nombre: yup.string().required(),
    email:yup.string().email().required()
});

//https://www.youtube.com/watch?v=Q8tS_upHm6Q&list=PLg-z1C9R1jutezByZ3WmH8NE_JqYBsDOA&index=7

