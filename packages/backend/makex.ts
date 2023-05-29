import { writeFileSync, existsSync } from 'fs';
import AppConfig from './src/Config/app';

const createFile = async (filePath: string): Promise<void> => {
  writeFileSync(filePath, 'Hello World!', {});
};

const createController = async (controllerName: string): Promise<void> => {
  // - validate controller name
  // - check if the controller already exists
  // - create the file with default contents


  // Appends the string "Controller" to the `controllerName` variable.
  // This ensures that the controller name always ends with the string
  // "Controller" as per the naming convention.
  if (
    AppConfig.controller.nameMustEndsWithController &&
    !controllerName.toLowerCase().endsWith('controller')
  ) {
    controllerName = controllerName + 'Controller';
  }

  const dirPath = AppConfig.paths.controllers;
  const filePath = dirPath + '/' + controllerName + '.ts';
  if (await checkFileExists(filePath)) {
    console.error(`The file ${filePath} is already exists`);
    return;
  }

  createFile(filePath);
};

const checkFileExists = async (filename: string): Promise<boolean> => {
  return existsSync(filename);
};

createController('Auth');
