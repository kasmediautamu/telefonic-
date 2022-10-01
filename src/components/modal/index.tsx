import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

interface IModalProps {
  show: any
  children: React.ReactNode
  handleCloseModal: () => void
  handleShowModal: () => void
  title: string
}

export default function AppModal({
  show,
  handleCloseModal,
  handleShowModal,
  children,
  title,
}: IModalProps) {
  return (
    <>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            CANCEL
          </Button>
          <Button variant='primary' onClick={handleCloseModal}>
            SAVE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
