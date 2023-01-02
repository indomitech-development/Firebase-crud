import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button
  } from '@chakra-ui/react'
export const Tables = () => {
  return (
    <div>
        <TableContainer mt='20'>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>First Name</Th>
        <Th>Last Name</Th>
        <Th>Email</Th>
        <Th>Image</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td> <Button colorScheme='red'>DELETE</Button> <Button colorScheme='green' >UPDATE</Button></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </div>
  )
}
