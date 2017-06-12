import undoRedo from '../src/undo-redo';

describe('tests', () => {
  let unRe, obj;

  beforeEach(() => {
    obj = {
      x: 1,
      y: 2
    };
    unRe = undoRedo(obj);
  });

  it('get/set tests', () => {
    // The get method returns the value of a key
    expect(unRe.get('x')).toBe(1);

    // The set method change the value of a key
    unRe.set('x', 3);
    expect(unRe.get('x')).toBe(3);
  });

  it('simple undo', () => {
    unRe.set('y', 10);

    // The get method returns the value of a key
    expect(unRe.get('y')).toBe(10);

    // The undo method restores the previous state
    unRe.undo();
    expect(unRe.get('y')).toBe(2);

    // It should have thrown an exception
    expect(() => {
      unRe.undo()
    }).toThrow();
    expect(unRe.get('y')).toBe(2);
  });

  it('simple redo', () => {
    unRe.set('y', 10);

    // The get method returns the value of a key
    expect(unRe.get('y')).toBe(10);

    // The undo method restores the previous state
    unRe.undo();
    expect(unRe.get('y')).toBe(2);

    // The undo method restores the previous state
    unRe.redo();
    expect(unRe.get('y')).toBe(10);

    // It should have thrown an exception
    expect(() => {
      unRe.redo();
    }).toThrow();
    expect(unRe.get('y')).toBe(10);
  });

  it('undo/redo', () => {
    unRe.set('y', 10);
    unRe.set('y', 100);
    unRe.set('x', 150);
    unRe.set('x', 50);

    // The get method returns the value of a key
    expect(unRe.get('y')).toBe(100);
    expect(unRe.get('x')).toBe(50);

    // The undo method restores the previous state and y key stays the same
    unRe.undo();
    expect(unRe.get('x')).toBe(150);
    expect(unRe.get('y')).toBe(100);

    // Undo the x value
    unRe.redo();
    expect(unRe.get('x')).toBe(50);

    // The y key stays the same
    expect(unRe.get('y')).toBe(100);

    // Undo the x value
    unRe.undo();
    unRe.undo();
    expect(unRe.get('x')).toBe(1);

    // The y key stays the same
    expect(unRe.get('y')).toBe(100);

    // Undo the y value
    unRe.undo();
    unRe.undo();
    expect(unRe.get('y')).toBe(2);

    // The x key stays the same
    expect(unRe.get('x')).toBe(1);

    // It should have thrown an exception
    expect(() => {
      unRe.undo()
    }).toThrow();
    // There is nothing to undo
    expect(unRe.get('y')).toBe(2);

    unRe.redo();
    unRe.redo();
    unRe.redo();
    unRe.redo();

    // y key redo state
    expect(unRe.get('y')).toBe(100);
    // y key redo state
    expect(unRe.get('x')).toBe(50);

    // It should have thrown an exception
    expect(() => {
      unRe.redo();
    }).toThrow();
    // There is nothing to redo
    expect(unRe.get('y')).toBe(100);
  });

  it('new key', () => {
    // A new key has been added
    unRe.set('z', 10);
    expect(unRe.get('z')).toBe(10);

    // The z key should not exist
    unRe.undo();
    expect(unRe.get('z')).toBe(undefined);

    // A new key has been added
    unRe.redo();
    expect(unRe.get('z')).toBe(10);
  });

  it('delete key', () => {
    // The x key should not exist
    unRe.del('x');
    expect(unRe.get('x')).toBe(undefined);

    // The x key should be deleted
    expect(obj).not.toHaveProperty('x');

    // A new key has been added
    unRe.undo();
    expect(unRe.get('x')).toBe(1);

    // The x key should not exist
    unRe.redo();
    expect(unRe.get('x')).toBe(undefined);

    // The x key should be deleted
    expect(obj).not.toHaveProperty('x');
  });

  it('change after undo', () => {
    unRe.set('x', 10);
    unRe.set('x', 11);
    unRe.undo();
    unRe.set('x', 15);
    expect(unRe.get('x')).toBe(15);

    // It should have thrown an exception
    expect(() => {
      unRe.redo();
    }).toThrow();
    expect(unRe.get('x')).toBe(15);
  });
 });
