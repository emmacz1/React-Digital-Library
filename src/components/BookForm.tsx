import React from 'react';
import Button from './Button';
import Input from './Input';
import { useForm } from 'react-hook-form';
import { server_calls } from '../api/server';
import { useDispatch, useStore } from 'react-redux';
import { chooseTitle, chooseAuthor, chooseYear, chooseIsbn } from '../redux/slices/RootSlices';

interface BookFormProps {
  id?: string[];
}

const BookForm = (props: BookFormProps) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = async (data: any, event: any) => {
    if (props.id && props.id.length > 0) {
      await server_calls.update(props.id[0], data);
      setTimeout(() => { window.location.reload(); }, 500);
      event.target.reset();
    } else {
      dispatch(chooseTitle(data.title));
      dispatch(chooseAuthor(data.author));
      dispatch(chooseYear(data.year));
      dispatch(chooseIsbn(data.isbn));
      await server_calls.create(store.getState());
      setTimeout(() => { window.location.reload(); }, 500);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Book Title</label>
      <Input {...register('title')} name='title' placeholder="Book Title" />

      <label htmlFor="author">Author</label>
      <Input {...register('author')} name='author' placeholder="Author" />

      <label htmlFor="year">Year</label>
      <Input {...register('year')} name='year' placeholder="Year" />

      <label htmlFor="isbn">Isbn</label>
      <Input {...register('isbn')} name='isbn' placeholder="Isbn" />

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default BookForm;
