import { Item } from '../lib/types';
import { client } from './client'

export async function getItems() {
  const { data, error } = await client
    .from('list')
    .select('*');

  if (error) {
    console.error('Error fetching items from store: ', error)
  }
  return data
}


export async function getItem(id: number) {
  const { data, error } = await client
    .from('list')
    .select('*')
    .match({ 'id': id })
    .single()
  if (error) {
    console.error('Error fetching item from store: ', error)
  }
  return data
}

export async function createItem(newItem: Item) {
  const { data, error } = await client
    .from('list')
    .insert(newItem)
  if (error) {
    console.error('Error creating item in store: ', error)
  }
  return data
}

export async function updateItem(id: number, newItem: Item) {
  const { data, error } = await client
    .from('list')
    .update({ ...newItem })
    .match({ 'id': id })
    .single()
  if (error) {
    console.error('Error updating item in store: ', error)
  }
  return data
}

export async function deleteItem(id: number) {
  const {data, error} = await client
    .from('list')
    .delete()
    .eq('id', id)
  if (error) {
    console.error('Error deleting item in store: ', error)
  }
  return data
}
