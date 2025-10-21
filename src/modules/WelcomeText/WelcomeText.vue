<template>
  <section class="welcome">
    <div class="welcome__container">
      <div class="welcome__content">
        <h2 class="welcome__title">
          Откройте Самару <span class="welcome__accent">по-новому</span>
        </h2>

        <div class="welcome__text">
          <p class="welcome__paragraph">
            В Самаре каждый уголок рассказывает свою историю — от волжских просторов
            до купеческих особняков. Мы собрали лучшие места, чтобы ваш отдых стал
            по-настоящему незабываемым.
          </p>

          <div class="welcome__features">
            <div class="welcome__feature">
              <span class="welcome__feature-icon">📍</span>

              <span>Проверенные локации</span>
            </div>

            <div class="welcome__feature">
              <span class="welcome__feature-icon">🎯</span>

              <span>Маршруты под ваши интересы</span>
            </div>

            <div class="welcome__feature">
              <span class="welcome__feature-icon">💫</span>

              <span>Только актуальная информация</span>
            </div>
          </div>
        </div>
      </div>

      <div class="welcome__visual">
        <div class="welcome__card welcome__card--primary">
          <div class="welcome__card-content">
            <span class="welcome__card-number">50+</span>

            <span class="welcome__card-label">мест для отдыха</span>
          </div>
        </div>

        <div class="welcome__card welcome__card--secondary">
          <div class="welcome__card-content">
            <span class="welcome__card-number">10</span>

            <span class="welcome__card-label">тематических маршрутов</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/styles/abstracts/_mixins.scss';

  .welcome {
    padding: 80px 0;
    background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);

    &__container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 60px;

      @include mq('768') {
        grid-template-columns: 1fr 1fr;
        align-items: center;
      }
    }

    &__title {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      color: #1e293b;
      margin-bottom: 24px;

      @include mq('768') {
        font-size: 3rem;
      }
    }

    &__accent {
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    &__paragraph {
      font-size: 1.125rem;
      line-height: 1.7;
      color: #64748b;
      margin-bottom: 32px;
    }

    &__features {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &__feature {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1rem;
      color: #475569;

      &-icon {
        font-size: 1.25rem;
      }
    }

    &__visual {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      position: relative;
    }

    &__card {
      padding: 30px 24px;
      border-radius: 20px;
      text-align: center;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      &--primary {
        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        color: white;
      }

      &--secondary {
        background: white;
        color: #1e293b;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        border: 1px solid #e2e8f0;
      }
    }

    &__card-number {
      display: block;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1;
      margin-bottom: 8px;
    }

    &__card-label {
      font-size: 0.875rem;
      opacity: 0.9;
    }
  }
</style>
