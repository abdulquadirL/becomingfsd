import express from "express";
import {
    listPets,
    getPet,
    editPet,
    addPet,
    deletePet,
} from "../controllers/pets.controllers.js"
import swaggerJSdoc from "swagger-jsdoc";

const router = express.Router();

/** 
 * @swagger
 * components:
 *  schemas:
 *      Pet:
 *        type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: Pet name
 *              name: 
 *                  type: string 
 *                  description: Pet name
 *              type: 
 *                  type: string
 *                  description: Pet breed
 *      example: 
 *              id: 1
 *              name: Rexaurus
 *              age: 3 
 *              breed: labrador  
 *              type: dog  
 */

/**
 * @swagger
 * /pets:
 *  get:
 *      summary: Get all pets
 *      description: Get all pets
 *      responses: 
 *          200:
 *              description: Success
 *          500:
 *              description: Internal Server Error
 */

router.get("/", listPets);

/**
 * @swagger
 * /pets/{id}:
 *  get:
 *      summary: Get pet detail
 *      description: Get pet detail
 *      parameters:
 *          - in: path
 *            name: id
 *            schema: 
 *              type: integer
 *            required: true
 *            description: Pet id
 *      responses: 
 *        200:
 *           description: Success
 *        500:
 *           description: Internal Server Error
 */
router.get("/:id", getPet);

/**
 * @swagger
 * /pets/{id}
 *  put:
 *      summary: Edit pet
 *      description: Edit pet
 *      parameters:
 *          - in: path
 *            name: id
 *            schema: 
 *              type: integer
 *            required: true
 *            description: Pet id
 *      requestBody:
 *          description: A JSON object containing pet information
 *          content:
 *            application/json:
 *              schema:
 *                  $ref '#/components/schemas/Pet'
 *              example:
 *                  name: Rexaurus
 *                  age: 12
 *                  breed: labrador
 *                  type: dog
 *      responses: 
 *      200:
 *          description: Success
 *      500:
 *          description: Internal Server Error
 * 
 */
router.put("/:id", editPet);

/**
 * @swagger
 * /pets:
 *  post:
 *      summary: Add pet
 *      description: Add pet
 *      requestBody: 
 *          description: A JSON object containing pet information 
 *          content:
 *              appplication/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Pet'
 *                  example:
 *                      name: Rexaurus
 *                      age: 12
 *                      breed: labrador
 *                      type: dog
 *      responses:
 *      200:
 *          description: Success
 *      500:
 *          description: Internal Server Error
 *      
 */
router.post("/", addPet);

/**
 * @swagger
 * /pets/{id}:
 *  delete:
 *      summary: Delete pet
 *      description: Delete pet
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema: 
 *              type: integer
 *            required: true
 *            description: Pet id
 *      responses: 
 *      200:
 *          description: Success
 *      500:
 *          description: Internal Server Error
 * 
 */
router.delete("/:id", deletePet);

export default router;