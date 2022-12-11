"""empty message

Revision ID: 60fa5a515c86
Revises: a5cfb70c6574
Create Date: 2022-12-11 20:29:50.790889

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '60fa5a515c86'
down_revision = 'a5cfb70c6574'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('firstName', sa.String(length=20), nullable=False))
        batch_op.add_column(sa.Column('lastName', sa.String(length=20), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('lastName')
        batch_op.drop_column('firstName')

    # ### end Alembic commands ###
