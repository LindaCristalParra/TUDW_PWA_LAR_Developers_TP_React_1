import styles from './CardDetail.module.css';

import OpenEye_Icon from '../../assets/Icons/OpenEye_Icon.svg';
import CloseEye_Icon from '../../assets/Icons/CloseEye_Icon.svg';
import Edit_Icon from '../../assets/Icons/Edit_Icon.svg';
import Delete_Icon from '../../assets/Icons/Detele_Icon.svg';

const CardDetail = ({ movie, onEdit, onDelete, onToggleWatched }) => {

    if (!movie) return null;

    return (
        <div className={styles.detailContainer}>

            <div className={styles.imageSection}>
                <img src={movie.image} alt={movie.title} className={styles.coverImage} />
            </div>

            <div className={styles.middleSection}>
                <div className={styles.actionGroup}>

                    <button
                        className={`${styles.iconButton} ${movie.watched ? styles.active : ''}`} 
                        onClick={() => onToggleWatched(movie.id)}
                    >
                        <img src={movie.watched ? CloseEye_Icon : OpenEye_Icon} alt="Visto"/>
                    </button>

                    <button className={styles.iconButton} onClick={() => onEdit(movie)} title="Editar">
                        <img src={Edit_Icon} alt="Editar" />
                    </button>

                    <button className={styles.iconButton} onClick={() => onDelete(movie.id)} title="Borrar">
                        <img src={Delete_Icon} alt="Borrar" />
                    </button>

                    <div className={styles.badgeGroup}>
                        <span className={styles.badge}>{movie.type}</span>
                        <span className={styles.badge}>{movie.genre}</span>
                        <span className={styles.badge}>{movie.rating}</span>
                    </div>
                </div>
            </div>

            <div className={styles.textSection}>

                <div className={styles.titleWrapper}>
                    <label className={styles.inputLabel}>Título</label>
                    <h2 className={styles.title}>{movie.title}</h2>
                </div>

                <div className={styles.infoGrid}>
                    <div className={styles.infoBox}>
                        <label className={styles.inputLabel}>Director</label>
                        <p className={styles.infoValue}>{movie.director}</p>
                    </div>
                    <div className={styles.infoBox}>
                        <label className={styles.inputLabel}>Año</label>
                        <p className={styles.infoValue}>{movie.year}</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CardDetail;