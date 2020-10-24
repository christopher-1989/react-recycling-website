import React from 'react'
import { render, getByText } from '@testing-library/react'

const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db');

  describe ("Simulating Database", () => {
      test('Creates empty Database which is an emptry array', () => {
            const emptyArray = new Array();
            const dbReturn = getAllFromDatabase();
            expect(dbReturn).toEqual(emptyArray);
      })
      test("adds to Database and gets from database by id", () => {
            const objectToAdd = {
                post: 'Hello World',
                id: 1
            }
            addToDatabase(objectToAdd);
            const retrieve = getFromDatabaseById('1');
            expect(retrieve).toEqual(objectToAdd);
      })
      test('updates database by id', () => {
            const objectToAdd = {
                post: 'Second Hello World',
                id: 2
            }
            addToDatabase(objectToAdd);
            const objectToUpdate = {
                post: 'Goodbye World',
                id: '2'
                //Must be string as the server would receive id as a string
            }
            updateInstanceInDatabase(objectToUpdate)
            const retrieve = getFromDatabaseById('2');
            expect(retrieve).toEqual(objectToUpdate);
      })

      test('deletes from database by id', () => {
            const objectToAdd = {
                post: 'Third Hello World',
                id: 1
            }
            addToDatabase(objectToAdd);
            deleteFromDatabasebyId('3')
            const dbReturn = getFromDatabaseById('3');
            expect(dbReturn).toBeUndefined();
      })
      test('deletes all from database function works', () => {
          let currentDb = getAllFromDatabase();
          deleteAllFromDatabase();
          currentDb = getAllFromDatabase();
          expect(currentDb).toEqual([]);
      })
  })