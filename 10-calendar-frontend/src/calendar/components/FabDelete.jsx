import { useCalendarStore, useUiStore } from '../../hooks';

export const FabDelete = ({isOpen}) => {

    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const handleDelete = () => {
        startDeletingEvent();
    }


  return (
    <button
        className="btn btn-danger fab-danger"
        onClick={ handleDelete }
        style={{
            display: hasEventSelected && !isOpen ? '': 'none'
        }}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
``