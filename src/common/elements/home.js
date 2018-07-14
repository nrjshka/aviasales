import React, { Component } from 'react';
import styled from 'styled-components';

export const HeaderInput = styled.div`
  width: 100%;
  height: 56px;
  background-color: #fff;
  color: #4A4A4A;
  '::-webkit-input-placeholder' {
    color: #A0B0B9;
  }
  padding: 18px 16px;
  margin-bottom: 3px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;

  * {
    vertical-align: top;
  }
`;

export const PlaceInput = styled.input`
  border-style: none;
  outline: none;
  padding-right: 5px;
  width: ${props => props.Width};
`;

export const ActionButton = styled.button`
  width: 100%;
  height: ${props => props.Height};
  border-radius: 4px;
  border-width: 0;
  background-color: #FF9241;
  color: #fff;
  font-size: 24px;
  line-height: 28px;
`;