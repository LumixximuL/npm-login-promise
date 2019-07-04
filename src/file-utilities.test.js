import { readFile, writeFile } from './file-utilities';
import fs from 'fs';
import sinon from 'sinon';

jest.mock('fs');

afterEach(() => {
  sinon.restore();
});

test('should read file on success', () => {
  const expectedContents = 'some contents';
  const args = { configPath: 'config path' };
  const callback = jest.fn();

  sinon.stub(fs, 'readFile').yields(null, expectedContents);

  readFile(args, callback);

  sinon.assert.calledOnce(fs.readFile);
  expect(fs.readFile.args[0][0]).toBe(args.configPath);
  expect(fs.readFile.args[0][1]).toBe('utf-8');

  expect(callback.mock.calls.length).toBe(1);
  expect(callback.mock.calls[0][0]).toBe(null);
  expect(callback.mock.calls[0][1]).toBe(expectedContents);
});

test('should read file on failure', () => {
  const expectedError = 'some error';
  const args = { configPath: 'config path' };
  const callback = jest.fn();

  sinon.stub(fs, 'readFile').yields(expectedError);

  readFile(args, callback);

  expect(callback.mock.calls.length).toBe(1);
  expect(callback.mock.calls[0][0]).toBe(expectedError);
  expect(callback.mock.calls[0][1]).toBe('');
});

test('should write file', () => {
  const configPath = 'some path';
  const lines = ['line 1', 'line 2', 'line 3'];
  const expectedLines = lines.join('\n') + '\n';
  const callback = jest.fn();

  writeFile(configPath, lines, callback);

  expect(fs.writeFile.mock.calls.length).toBe(1);
  expect(fs.writeFile.mock.calls[0][0]).toBe(configPath);
  expect(fs.writeFile.mock.calls[0][1]).toBe(expectedLines);
  expect(fs.writeFile.mock.calls[0][2]).toBe(callback);
});
