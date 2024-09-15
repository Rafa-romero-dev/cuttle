import MoveType from '../../../../utils/MoveType.json';
import GamePhase from '../../../../utils/GamePhase.json';
import GameStatus from '../../../../utils/GameStatus.json';
import { gameFixture } from '../Game';
import { Card } from '../Card';

const gameStateRow = {
  playedBy: 0,
  moveType: MoveType.RESOLVE_THREE,
  playedCard: null,
  targetCard: 'TH',
  discardedCards: [],
  turn: 1,
  phase: GamePhase.MAIN,
  p0Hand: ['TH'],
  p0Points: [],
  p0FaceCards: [],
  p1Hand: ['TD'],
  p1Points: ['AH'],
  p1FaceCards: [],
  deck: ['6S', '2H', 'AC'],
  scrap: [],
  oneOff: null,
  oneOffTarget: null,
  oneOffTargetType: null,
  twos: [],
  resolved: '3S',
  gameId: 1,
};

export const resolveThree = {
  gameState: {
    playedBy: 0,
    moveType: MoveType.RESOLVE_THREE,
    playedCard: null,
    targetCard: Card.TEN_OF_HEARTS,
    discardedCards: [],
    turn: 1,
    phase: GamePhase.MAIN,
    p0: {
      hand: [Card.TEN_OF_HEARTS],
      points: [],
      faceCards: [],
    },
    p1: {
      hand: [Card.TEN_OF_DIAMONDS],
      points: [Card.ACE_OF_HEARTS],
      faceCards: [],
    },
    deck: [Card.SIX_OF_SPADES, Card.TWO_OF_HEARTS, Card.ACE_OF_CLUBS],
    scrap: [],
    oneOff: null,
    oneOffTarget: null,
    oneOffTargetType: null,
    twos: [],
    resolved: Card.THREE_OF_SPADES,
    gameId: 1,
  },

  gameStateRow,

  game: {
    ...gameFixture,
    gameStates: [gameStateRow],
  },

  socket: {
    change: MoveType.RESOLVE_THREE,
    happened: true,
    oneOff: Card.THREE_OF_SPADES,
    chosenCard: Card.TEN_OF_HEARTS,
    playedBy: 0,
    pNum: 0,
    game: {
      players: [
        {
          hand: [Card.TEN_OF_HEARTS],
          points: [],
          faceCards: [],
          createdAt: '2024-07-14T12:59:45.813Z',
          updatedAt: '2024-07-14T12:59:51.528Z',
          id: 17,
          username: 'myUsername',
          pNum: 0,
          rank: 1000,
          game: 1,
          frozenId: null,
        },
        {
          hand: [Card.TEN_OF_DIAMONDS],
          points: [Card.ACE_OF_HEARTS],
          faceCards: [],
          createdAt: '2024-07-14T12:59:47.709Z',
          updatedAt: '2024-07-14T12:59:51.769Z',
          id: 18,
          username: 'definitelyNotTheGovernment6969',
          pNum: 1,
          rank: 1000,
          game: 1,
          frozenId: null,
        },
      ],
      deck: [Card.ACE_OF_CLUBS],
      scrap: [],
      twos: [],
      spectatingUsers: [],
      name: 'Test Game',
      status: GameStatus.STARTED,
      p0Ready: true,
      p1Ready: true,
      p0Rematch: null,
      p1Rematch: null,
      rematchGame: null,
      resolved: Card.THREE_OF_SPADES,
      passes: 0,
      oneOff: null,
      oneOffTarget: null,
      oneOffTargetType: null,
      turn: 1,
      log: ['myUsername took the 10♥️ from the Scrap pile to their hand.'],
      turnStalemateWasRequestedByP0: -1,
      turnStalemateWasRequestedByP1: -1,
      chat: [],
      isRanked: false,
      lastEvent: {
        change: MoveType.RESOLVE_THREE,
        pNum: 0,
        chosenCard: Card.TEN_OF_HEARTS,
        oneOff: Card.THREE_OF_SPADES,
        happened: true,
      },
      lock: null,
      lockedAt: null,
      match: null,
      winner: null,
      topCard: Card.SIX_OF_SPADES,
      secondCard: Card.TWO_OF_HEARTS,
    },
    victory: {
      conceded: false,
      currentMatch: null,
      gameOver: false,
      winner: null,
    },
  },
};
