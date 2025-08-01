'use strict';
let Dice_Displayer = document.querySelector('.dice');
let roll_button = document.querySelector('.btn--roll');
let player_1_current_score = document.querySelector('#current--0');
let player_2_current_score = document.querySelector('#current--1');
const reset_game = document.querySelector('.btn--new');
let player_1_Total_Score = document.querySelector('#score--0');
let player_2_Total_Score = document.querySelector('#score--1');
const hold_button = document.querySelector('.btn--hold');
const active_player = document.querySelector('.player--active');
const switch_to_player_1 = document.querySelector('.player--0');
const switch_to_player_2 = document.querySelector('.player--1');

let activePlayer = 1;
let Score_1 = 0;
let Score_2 = 0;
let Total_1 = 0;
let Total_2 = 0;

Dice_Displayer.style.display = 'none';
player_1_Total_Score.textContent = 0;
player_2_Total_Score.textContent = 0;

roll_button.addEventListener('click', function () {
  Dice_Displayer.style.display = 'block';

  let random = Math.floor(Math.random() * 6) + 1;
  Dice_Displayer.src = `dice-${random}.png`;

  if (activePlayer == 1) {
    if (random !== 1) {
      Score_1 = random;
      player_1_current_score.textContent = Score_1;
      switch_to_player_1.classList.add('player--active');
      switch_to_player_2.classList.remove('player--active');
    } else {
      player_1_current_score.textContent = 0;
      player_1_Total_Score.textContent = 0;
      Total_1 = 0;
      activePlayer = 0;
      switch_to_player_2.classList.add('player--active');
      switch_to_player_1.classList.remove('player--active');
    }
  } else {
    if (activePlayer == 0) {
      if (random !== 1) {
        Score_2 = random;
        player_2_current_score.textContent = Score_2;
        switch_to_player_2.classList.add('player--active');
        switch_to_player_1.classList.remove('player--active');
      } else {
        player_2_current_score.textContent = 0;
        Total_2 = 0;
        player_2_Total_Score.textContent = 0;
        activePlayer = 1;
        switch_to_player_1.classList.add('player--active');
        switch_to_player_2.classList.remove('player--active');
      }
    } else {
      console.log('Not Reached!');
    }
  }
});

hold_button.addEventListener('click', function () {
  if (activePlayer == 1 && Score_1 !== 1) {
    Total_1 += Score_1;
    player_1_Total_Score.textContent = Total_1;
    player_1_current_score.textContent = 0;
  } else {
    if (activePlayer == 0 && Score_2 !== 1) {
      Total_2 += Score_2;
      player_2_Total_Score.textContent = Total_2;
      player_2_current_score.textContent = 0;
    }
  }
  if (Total_1 >= 5) {
    switch_to_player_1.classList.add('player--winner');
    Dice_Displayer.style.display = 'none';
    roll_button.disabled = true;
    hold_button.disabled = true;
    Dice_Displayer.disabled = true;
    Total_1 = 0;
  } else if (Total_2 >= 5) {
    switch_to_player_2.classList.add('player--winner');
    Dice_Displayer.style.display = 'none';
    roll_button.disabled = true;
    hold_button.disabled = true;
    Dice_Displayer.disabled = true;
    Total_2 = 0;
  } else {
    return;
  }
});
reset_game.addEventListener('click', function () {
  player_1_current_score.textContent = 0;
  player_2_current_score.textContent = 0;
  player_1_Total_Score.textContent = 0;
  player_2_Total_Score.textContent = 0;
  roll_button.disabled = false;
  hold_button.disabled = false;
  Dice_Displayer.disabled = false;
  roll_button.disabled = false;
  hold_button.disabled = false;
  Dice_Displayer.disabled = false;
  switch_to_player_1.classList.remove('player--winner');
  switch_to_player_2.classList.remove('player--winner');
  Dice_Displayer.style.display = 'none';
  active_player.enabled = true;
});
