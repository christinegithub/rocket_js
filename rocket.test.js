
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      rocket = new Rocket();
      expect(rocket.name).toBeDefined();
      expect(rocket.colour).toBeDefined();
      expect(rocket.flying).toEqual(false);
    });

    test("it should set the rocket's name if provided", () => {
      rocket = new Rocket();
      rocket.name = ("Aries");
      expect(rocket.name).toEqual("Aries");

      rocket = new Rocket();
      rocket.name = (1234567);
      expect(rocket.name).toEqual(1234567);

      rocket = new Rocket();
      rocket.name = ("");
      expect(rocket.name).toEqual("");

      rocket = new Rocket();
      rocket.name = (["Aries", "Taurus"]);
      expect(rocket.name).toEqual(["Aries", "Taurus"]);

      rocket = new Rocket();
      rocket.name = ({ color: "blue", created: 2017, active: true });
      expect(rocket.name).toEqual({ color: "blue", created: 2017, active: true });
    });

  });

  describe('liftOff', () => {
    test("it should set lift off and flying status if rocket flying/not flying", () => {
      rocket = new Rocket();
      rocket.flying = true;
      expect(rocket.flying).toEqual(true);
      expect(rocket.liftOff()).toEqual(false);

      rocket = new Rocket();
      rocket.flying = false;
      expect(rocket.flying).toEqual(false);
      expect(rocket.liftOff()).toEqual(true);
    });

  });

  describe('land', () => {
    test("it should state land status if rocket is flying/not flying", () => {
      rocket = new Rocket();
      rocket.flying = false;
      expect(rocket.flying).toEqual(false);
      expect(rocket.land()).toEqual(false);

      rocket = new Rocket();
      rocket.flying = true;
      expect(rocket.flying).toEqual(true);
      expect(rocket.land()).toEqual(true);
    });
  });

  describe('sendCodedSignal', () => {
    test("it should send correct signals", () => {
      rocket = new Rocket();
      rocket.flying = true;
      expect(rocket.sendCodedSignal(1)).toEqual('beep beep');

      rocket = new Rocket();
      rocket.flying = true;
      expect(rocket.sendCodedSignal(20)).toEqual('boop boop boop');

      rocket = new Rocket();
      rocket.flying = false;
      expect(rocket.sendCodedSignal(5)).toEqual('beep');

      rocket =  new Rocket();
      rocket.flying = false;
      expect(rocket.sendCodedSignal(17)).toEqual('boop beep beep');

      rocket = new Rocket();
      rocket.flying = true;
      expect(rocket.sendCodedSignal()).toEqual('boop');
    });
  });
});
