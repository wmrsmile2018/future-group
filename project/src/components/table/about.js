import React from 'react';

export default function About({ user }) {
  return (
      <div className="About">
        Выбран пользователь <b>{`${user.firstName} ${user.lastName}`}</b>
        Описание:
        <textarea>
          {user.description}
        </textarea>
        Адрес проживания: <b>{user.address.streetAddress}</b>
        Город: <b>{user.city}</b>
        Провинция/штат: <b>{user.address.state}</b>
        Индекс: <b>{user.address.zip}</b>
      </div>
  )
}
