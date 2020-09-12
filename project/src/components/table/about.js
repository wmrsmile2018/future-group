import React from 'react';

export default function About({ user }) {
  return (
      <div className="about">
        <div className="about__user">
          <span className="about-header about__user-header">Выбран пользователь</span>
          <span className="about-body about__user-body"><b>{`${user.firstName} ${user.lastName}`}</b></span>
        </div>
        <div className="about__description">
          <span className="about-header about__description-header">Описание:</span>
          <span className="about-body about__description-body">{user.description}</span>
        </div>
        <div className="about__address">
          <span className="about-header about__address-header">Адрес проживания:</span>
          <span className="about-body about__address-doby"><b>{user.address.streetAddress}</b></span>
        </div>
        <div className="about__city">
          <span className="about-header about__city-header">Город:</span>
          <span className="about-body about__city-doby"><b>{user.address.city}</b></span>
        </div>
        <div className="about__state">
          <span className="about-header about__state-header">Провинция штат: </span>
          <span className="about-body about__state-doby"><b>{user.address.state}</b></span>
        </div>
        <div className="about__zip">
          <span className="about-header about__zip-header">Индекс:</span>
          <span className="about-body about__zip-doby"><b>{user.address.zip}</b></span>
        </div>
      </div>
  )
}
