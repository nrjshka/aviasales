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
`;

export const PlaceInput = styled.input`
  border-style: none;
  outline: none;
  padding-right: 5px;
  width: ${props => props.isLong ? "270px" : "190px"};
`;