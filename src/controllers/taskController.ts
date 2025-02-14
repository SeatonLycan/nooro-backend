import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
}

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, color } = req.body;

    const newTask = await prisma.task.create({
      data: {
        title,
        color
      }
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Error creating task" });
  }
}

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { title, color, completed } = req.body;
    const updatedTask = await prisma.task.update({
      where: { id: Number(id)},
      data: {
        title,
        color,
        completed
      }
    })

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Error updating task" });
  }
}

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    await prisma.task.delete({
      where: ({ id: Number(id)})
    })

    res.status(204);
  } catch (error) {
    res.status(500).json({ error: "Error deleting task" });
  }
}